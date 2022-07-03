import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 3002});

const clients = {};

const messages = [];

let id = 0;

wss.on('connection', (ws) => {
    clients[++id] = ws;

    console.log(`WS connection installed! Id: ${id}`);

    ws.send(JSON.stringify(messages));

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        messages.push(data);

        console.log('Message: ', data);

        for (const id in clients) {
            clients[id].send(JSON.stringify(data));
        }
    });
});