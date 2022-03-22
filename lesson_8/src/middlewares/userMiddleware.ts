import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces/requestExtended.interface';
import { userRepository } from '../repositories/user/userRepository';

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
}

export const userMiddleware = new UserMiddleware();
