import { NextFunction, Response } from 'express';

import { tokenService } from '../services/tokenService';
import { userService } from '../services/userService';
import { IRequestExtended } from '../interfaces/requestExtended.interface';
import { tokenRepository } from '../repositories/token/tokenRepository';

class AuthMiddleware {
    public async checkAccessToken(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const token = req.get('Authorization');

            if (!token) {
                throw new Error('no token.....');
            }
            const { userEmail } = tokenService.verifyToken(token);

            const userFromToken = await userService.GetUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('wrong email.....');
            }
            const tokenFromDb = await tokenRepository.findByParams({ accessToken: token });

            if (!tokenFromDb) {
                throw new Error('token not valid.....');
            }

            req.user = userFromToken;

            next();
        } catch (err: any) {
            res.json({
                status: 401,
                message: err.message,
            });
        }
    }
}
export const authMiddleware = new AuthMiddleware();
