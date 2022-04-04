import crone from 'node-cron';

import { userRepository } from '../repositories/user/userRepository';
import { emailService } from '../services';
import { EmailActionEnums } from '../constans';
import { ErrorHandler } from '../error/ErrorHandler';

export const sendMail = async () => {
    crone.schedule('*/30 * * * * *', async () => {
        try {
            const users = await userRepository.getUsers();
            await Promise.allSettled(users.map(async (value) => {
                await emailService.sendMail(
                    EmailActionEnums.WELCOME,
                    value.email,
                    { user: value.lastName },
                );
            }));
        } catch (err) {
            throw new ErrorHandler(err.message, 404);
        }
    });
};
