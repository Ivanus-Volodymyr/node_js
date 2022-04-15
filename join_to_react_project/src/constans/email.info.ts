import { EmailActionEnums } from './enums';

export const EmailInfo = {
    [EmailActionEnums.WELCOME]: {
        subject: 'Hello it is welcome mail',
        templateName: 'welcome',
    },
    [EmailActionEnums.ACCOUNT_BLOCK]: {
        subject: 'Block',
        templateName: 'block',
    },
    [EmailActionEnums.FORGOT_PASSWORD]: {
        subject: 'Forgot password',
        templateName: 'forgot',
    },
};
