import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';
import { paramsValidator, userValidator } from '../validators';
import { ErrorHandler } from '../error/ErrorHandler';

class UserMiddleware {
    public async isUserExistInDB(
        req:IRequestExtended,
        _res: Response,
        next:NextFunction,
    ): Promise<void> {
        try {
            const userFromDB = await userRepository.getUserByEmail(req.body.email);

            if (!userFromDB) {
                next(new ErrorHandler('User not found...', 401));
                return;
            }
            req.user = userFromDB;
            next();
        } catch (err: any) {
            next(err);
        }
    }

    public async checkUserFields(
        req:IRequestExtended,
        _res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = userValidator.createUser.validate(req.body);

            if (error) {
                next(new ErrorHandler('enter all fields...'));
                return;
            }

            req.body = value;
            next();
        } catch (err: any) {
            next(err);
        }
    }

    public async checkUserFieldsOnLogin(
        req:IRequestExtended,
        _res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = userValidator.login.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.details[0].message, 401));
                return;
            }

            req.body = value;
            next();
        } catch (err: any) {
            next(err);
        }
    }

    public async checkUserid(
        req:IRequestExtended,
        _res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = paramsValidator.id.validate(req.params);

            if (error) {
                next(new ErrorHandler('Id is not valid...'));
            }

            req.params = value;
            next();
        } catch (err: any) {
            next(err);
        }
    }
}

export const userMiddleware = new UserMiddleware();
