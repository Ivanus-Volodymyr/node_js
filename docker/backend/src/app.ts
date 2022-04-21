import fileUpload from 'express-fileupload';
import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

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

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: 'GET, PUT, POST',
    credentials: true,
}));

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

    socket.on('join-room', (data: any) => {
        socket.join(data.id);
        let chat;
        if (data.id === 1) {
            chat = 'music';
        }
        if (data.id === 2) {
            chat = 'film';
        }
        // emit to all users in room include user SENDER
        io.to(data.id).emit('user-join-room', { message: `User ${socket.id} join in ${chat} chat` });

        socket.on('message-list', (value: any) => {
            io.to(data.id).emit('user-message', value);
        });
    });

    // ---------------------------------------------------------------------------------------------
    //
    // ONE TO ONE
    // socket.emit(event, {});
    //
    // SEND TO ALL ONLINE USERS (INCLUDE SENDER)
    // io.emit(event, {})
    //
    // SEND TO ALL ONLINE USERS (AVOID SENDER)
    // socket.broadcast.emit(event, {})
    //
    // socket.join(room_id)
    //
    // TO ROOM AVOID SENDER
    // socket.broadcast.to(room_id).emit(event, {})
    //
    // TO ROOM INCLUDE SENDER
    // io.to(room_id).emit(event, {})
    //
    // ---------------------------------------------------------------------------------------------
});

// mongoose.connect('mongodb://localhost:27017/test');

app.use(apiRouter);

const { port } = configEnv;
server.listen(port, async () => {
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('MySQL database connected....');
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
    console.log(`Server has started on port ${port}..........`);
    // cronRun(); // to start all crone;
});
