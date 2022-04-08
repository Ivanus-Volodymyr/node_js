import fileUpload from 'express-fileupload';
import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import * as http from 'http';
import SocketIO from 'socket.io';

import { apiRouter } from './routers/apiRoute';
import { configEnv } from './configs/configEnv';

export const rootDir = __dirname;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());

// @ts-ignore
const io = SocketIO(server, { cors: { origin: '*' } });
io.on('connection', (socket: any) => {
    console.log(socket.handshake.query);

    socket.on('message:send', (data: any) => {
        console.log('data----------------------');
        console.log(data);
        console.log('data----------------------');
        // one to one;
        // socket.emit('message:get-all', { messages: [{ text: data.message }] });
    });

    socket.on('join-rom', (data: any) => {
        socket.join(data.id);

        // one to many;
        // eslint-disable-next-line max-len
        // socket.broadcast.to(data.id).emit('user-join-room', { message: `User ${socket.id} join in room ${data.id}` });

        // emit to all users in room include user SENDER
        io.to(data.id).emit('user-join-room', { message: `User ${socket.id} join in room ${data.id}` });
    });

    // ---------------------------------------------------------------------------------------------

    // ONE TO ONE
    // socket.emit(event, {});

    // SEND TO ALL ONLINE USERS (INCLUDE SENDER)
    // io.emit(event, {})

    // SEND TO ALL ONLINE USERS (AVOID SENDER)
    // socket.broadcast.emit(event, {})

    // socket.join(room_id)

    // TO ROOM AVOID SENDER
    // socket.broadcast.to(room_id).emit(event, {})

    // TO ROOM INCLUDE SENDER
    // io.to(room_id).emit(event, {})

    // ---------------------------------------------------------------------------------------------
});

app.use(apiRouter);

const { port } = configEnv;
server.listen(port, async () => {
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected....');
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
    console.log(`Server has started on port ${port}..........`);
    // cronRun(); // to start all crone;
});
