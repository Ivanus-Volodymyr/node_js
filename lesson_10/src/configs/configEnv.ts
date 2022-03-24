import dotenv from 'dotenv';

import { IConfigEnv } from '../interfaces';

dotenv.config();

export const configEnv: IConfigEnv = {
    port: process.env.port || 5000,
    secret_key: process.env.secret_key,
    secret_key_refresh: process.env.secret_key_refresh,
};
