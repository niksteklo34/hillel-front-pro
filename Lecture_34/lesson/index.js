import { createServer } from 'http';

let tasksList = [];

let taskId = 0;

let exampleData = 'Test!';

let sseId = 0;

const server = createServer((request, response) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);

    if (url.pathname === '/sse') {
        response.setHeader('Content-Type', 'text/event-stream');
        response.setHeader('Access-control-allow-origin', '*');
        response.setHeader('Connection', 'keep-alive');

        setInterval(() => {
            response.write(`event: message-event\n`);
            response.write(`data: ${exampleData}!\n`);
            response.write(`id: ${++sseId}\n`);
            response.write('\n');
        }, 1000);

        setTimeout(() => {
            response.write(`event: end-of-connection\n`);
            response.write(`data: end\n`);
            response.write('\n');
        }, 5000);

        return;
    }

    if (url.pathname === '/help') {
        exampleData = url.searchParams.get('message');
        response.end('Help');
        return;
    }

    if (url.pathname.includes('/tasks')) {
        if (url.pathname === '/tasks' && request.method.toLowerCase() === 'get') {
            response.statusCode = 200;
            response.end(JSON.stringify(tasksList));
            return;
        }

        if (url.pathname === '/tasks' && request.method.toLowerCase() === 'post') {
            const newTask = {
                id: ++taskId,
                description: 'Add new task!',
            };

            tasksList.push(newTask);

            response.statusCode = 201;
            response.end(JSON.stringify(newTask));
            return;
        }

        if (request.method.toLowerCase() === 'delete') {
            const id = +url.pathname.slice(7);

            if (!tasksList.length || !tasksList.find((task) => task.id === id)) {
                response.statusCode = 400;
                response.end(JSON.stringify({ status: false }));
                return;
            }

            tasksList = tasksList.filter((task) => task.id !== id);

            response.statusCode = 200;
            response.end(JSON.stringify({status: true}));
            return;
        }
    }

    response.statusCode = 404;
    response.end('Page not found');
});

server.listen(3001, () => console.log('Server has been started!'));
