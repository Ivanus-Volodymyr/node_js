import nodemailer, { SentMessageInfo } from 'nodemailer';
import EmailTemplate from 'email-templates';
import path from 'path';

import { configEnv } from '../configs/configEnv';
import { EmailActionEnums, EmailInfo } from '../constans';
import { rootDir } from '../app';

class EmailService {
    async sendMail(
        action: EmailActionEnums,
        email: string,
        context = {},
    ): Promise<SentMessageInfo> {
        const { subject, templateName } = EmailInfo[action];

        const templateRender = new EmailTemplate({
            views: {
                root: path.join(rootDir, 'email.templates'),
            },
        });
        Object.assign(context, { url: configEnv.forgotUrl });

        const html = await templateRender.render(templateName, context);

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
