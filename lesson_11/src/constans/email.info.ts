import { emailActionEnums } from './enums';

export const EmailInfo = {
    [emailActionEnums.WELCOME]: {
        subject: 'Hello it is welcome mail',
        html: 'Hello, it is my welcome mail for you',
    },
    [emailActionEnums.ACCOUNT_BLOCK]: {
        subject: 'Block',
        html: 'You account was block',
    },
};
