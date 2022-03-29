import dotenv from 'dotenv';

import { IConfigEnv } from '../interfaces';

dotenv.config();

export const configEnv: IConfigEnv = {
    port: process.env.port || 5000,
    secret_key: process.env.secret_key,
    secret_key_refresh: process.env.secret_key_refresh,
    root_email: process.env.root_email as string,
    root_email_password: process.env.root_email_password as string,
};
