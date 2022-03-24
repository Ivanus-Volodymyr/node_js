import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';
import { paramsValidator, userValidator } from '../validators';

class UserMiddleware {
    public async isUserExistInDB(
        req:IRequestExtended,
        res: Response,
        next:NextFunction,
    ): Promise<void> {
        try {
            const userFromDB = await userRepository.getUserByEmail(req.body.email);

            if (!userFromDB) {
                res.status(404).json('User not found....');
                return;
            }
            req.user = userFromDB;
            next();
        } catch (err: any) {
            res.status(400).json(err.message);
        }
    }

    public async checkUserFields(
        req:IRequestExtended,
        res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = userValidator.createUser.validate(req.body);

            if (error) {
                res.status(404).json(error.message);
                return;
            }

            req.body = value;
            next();
        } catch (err: any) {
            res.status(400).json(err.message);
        }
    }

    public async checkUserFieldsOnLogin(
        req:IRequestExtended,
        res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = userValidator.login.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;
            next();
        } catch (err: any) {
            res.status(400).json(err.message);
        }
    }

    public async checkUserid(
        req:IRequestExtended,
        res:Response,
        next: NextFunction,
    ):Promise<void> {
        try {
            const { error, value } = paramsValidator.id.validate(req.params);

            if (error) {
                throw new Error(error.message);
            }

            req.params = value;
            next();
        } catch (err: any) {
            res.status(400).json(err.message);
        }
    }
}

export const userMiddleware = new UserMiddleware();
