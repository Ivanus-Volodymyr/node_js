import { sendMail } from './send-mail';

export const cronRun = () => {
    sendMail();
};
