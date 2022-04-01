import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import { apiRouter } from './routers/apiRoute';
import { configEnv } from './configs/configEnv';

export const rootDir = __dirname;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(apiRouter);

const { port } = configEnv;
app.listen(port, async () => {
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
});
