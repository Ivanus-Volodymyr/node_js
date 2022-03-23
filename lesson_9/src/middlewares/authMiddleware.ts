import { NextFunction, Response } from 'express';

import { tokenService, userService } from '../services';
import { IRequestExtended } from '../interfaces';
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

    public async checkRefreshToken(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const token = req.get('Authorization');

            if (!token) {
                throw new Error('no token.....');
            }
            const { userEmail } = tokenService.verifyToken(token, 'refresh');

            const userFromToken = await userService.GetUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('wrong email.....');
            }
            const tokenFromDb = await tokenRepository.findByParams({ refreshToken: token });

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
