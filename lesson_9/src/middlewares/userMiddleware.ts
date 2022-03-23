import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';
import { userValidator } from '../validators/user/userValidator';

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
                throw new Error(error.details[0].message);
            }

            req.body = value;
            next();
        } catch (err: any) {
            res.status(400).json(err.message);
        }
    }
}

export const userMiddleware = new UserMiddleware();
