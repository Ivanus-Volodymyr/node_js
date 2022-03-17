import dotenv from 'dotenv';

dotenv.config();

export const configEnv = {
    port: process.env.port || 5000,
    secret_key: process.env.secret_key,
    secret_key_refresh: process.env.secret_key_refresh,
};
