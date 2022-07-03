import { createServer } from 'http';
import { StringDecoder } from 'string_decoder';

let data;

let messageId = 0;

let messagesList = [];

const sse = (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-control-allow-origin', '*')
    res.setHeader('Connection', 'keep-alive')

    let id = 0;

    messagesList = new Proxy(messagesList, {
        set(target, prop, val) {
            target[prop] = val;

            if (typeof val !== "number") {
                res.write('event: load-messagesList\n');
                res.write(`data: ${JSON.stringify(target)}\n`);
                res.write(`id: ${++id}\n`);
                res.write('\n');

            }

            return true;
        }
    });


    if (messagesList.length >= 0) {
        res.write('event: load-messagesList\n');
        res.write(`data: ${JSON.stringify(messagesList)}\n`);
        res.write(`id: ${++id}\n`);
        res.write('\n');
    }

    // setTimeout(() => {
    //     clearInterval(timer);
    //
    //     res.write('event: end-of-stream\n');
    //     res.write('data: end!\n');
    //     res.write('\n');
    //     res.end();
    // }, 1000000);
};

const handler = (url, buffer, request, response) => {
    if (url.pathname === '/users') {
        response.statusCode = 201;
        response.write(JSON.stringify(messagesList));
        response.end('OKK');
        return;
    }

    if (url.pathname === '/sse') {
        sse(request, response);
        return;
    }

    if (url.pathname === '/set-date') {
        data = url.searchParams.get('data');
        response.end();
        return;
    }

    if (url.pathname === '/send-message') {
        if (request.method === 'POST') {

            const data = JSON.parse(buffer);

            const newMessage = {
                id: ++messageId,
                user: data.user,
                message: data.message,
            }

            messagesList.push(newMessage);

            response.end(JSON.stringify({status: true, message: newMessage}));
            return;
        }
    }

    response.statusCode = 404;
    response.end('Page not found!');
};

const httpServer = createServer((request, response) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);
    const decoder = new StringDecoder('utf8');
    let buffer = '';

    request.on('data', (data) => {
        buffer += decoder.write(data);
    });

    request.on('end', () => {
        buffer += decoder.end();
        handler(url, buffer, request, response);
    });
});

httpServer.listen(8080, () => console.log('Server has been started on 8080 port!'));