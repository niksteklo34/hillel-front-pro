import { WebSocketServer } from "ws";
import { v4 as uuid } from "uuid";
import { writeFile, readFileSync, existsSync } from "fs";

// Вебсокет не может заново создавать соединение с сервером, ess может
// Гараздо "дороже", чем SSE

const log = existsSync('log') && readFileSync('log');

const clients = {};
const messages = JSON.parse(log) || [];

const wss = new WebSocketServer({port: 8081});

wss.on('connection', (ws) => {
    const id = uuid();
    clients[id] = ws;

    console.log(`New client ${id}`);

    ws.send(JSON.stringify(messages));

    ws.on('message', (rawMessage) => {
        const message = JSON.parse(rawMessage);
        messages.push(message)

        console.log('FFF', messages)

        for (const id in clients) {
            clients[id].send(JSON.stringify(message));
        }
    });

    ws.on('close', () => {
        delete clients[id];
        console.log(`Client connection closed ${id}!`);
    });
});


process.on('SIGINT', () => {
    writeFile('log', JSON.stringify(messages), (err) => {
        console.log(messages)
        if (err) {
            console.log(err);
        }

        process.exit();
    });
});