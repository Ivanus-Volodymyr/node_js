import nodemailer from 'nodemailer';

import { configEnv } from '../configs/configEnv';
import { emailActionEnums, EmailInfo } from '../constans';

class EmailService {
    sendMail(action: emailActionEnums, email: string) {
        const { subject, html } = EmailInfo[action];

        const EmailTransporter = nodemailer.createTransport({
            from: 'Sep-2021',
            service: 'gmail',
            auth: {
                user: configEnv.root_email,
                pass: configEnv.root_email_password,
            },
        });
        return EmailTransporter.sendMail({
            to: email,
            subject,
            html,
        });
    }
}
export const emailService = new EmailService();
