import dotenv from 'dotenv';

import { IConfigEnv } from '../interfaces';

dotenv.config();

export const configEnv: IConfigEnv = {
    port: process.env.port || 5000,

    secret_key: process.env.secret_key || 'react',
    secret_key_refresh: process.env.secret_key_refresh || 'react',
    secret_action_key: process.env.secret_action_key || 'react',

    expires_in_action: process.env.expires_in_action || '1d',

    root_email: process.env.root_email || 'react',
    root_email_password: process.env.root_email_password || 'react',
    url: process.env.url || 'https://www.google.com',
    forgotUrl: process.env.forgotUrl || 'https://localhost:3000',
    bucket_name: process.env.bucket_name,
    region: process.env.region,
    access_key_bucket: process.env.access_key_bucket,
    secret_access_key_bucket: process.env.secret_access_key_bucket,
};
