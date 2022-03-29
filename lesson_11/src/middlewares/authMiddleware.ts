import { NextFunction, Response } from 'express';

import { tokenService, userService } from '../services';
import { IRequestExtended } from '../interfaces';
import { tokenRepository } from '../repositories/token/tokenRepository';
import { ErrorHandler } from '../error/ErrorHandler';

class AuthMiddleware {
    public async checkAccessToken(req:IRequestExtended, _res:Response, next:NextFunction) {
        try {
            const token = req.get('Authorization');

            if (!token) {
                next(new ErrorHandler('no token...', 401));
                return;
            }
            const { userEmail } = tokenService.verifyToken(token);

            const userFromToken = await userService.GetUserByEmail(userEmail);
            if (!userFromToken) {
                next(new ErrorHandler('wrong email...', 401));
                return;
            }
            const tokenFromDb = await tokenRepository.findByParams({ accessToken: token });

            if (!tokenFromDb) {
                next(new ErrorHandler('token not valid...', 401));
                return;
            }

            req.user = userFromToken;

            next();
        } catch (err: any) {
            next(err);
        }
    }

    public async checkRefreshToken(req:IRequestExtended, _res:Response, next:NextFunction) {
        try {
            const token = req.get('Authorization');

            if (!token) {
                next(new ErrorHandler('no token...', 401));
                return;
            }
            const { userEmail } = tokenService.verifyToken(token, 'refresh');

            const userFromToken = await userService.GetUserByEmail(userEmail);
            if (!userFromToken) {
                next(new ErrorHandler('wrong email...', 401));
                return;
            }
            const tokenFromDb = await tokenRepository.findByParams({ refreshToken: token });

            if (!tokenFromDb) {
                next(new ErrorHandler('token not valid...', 401));
                return;
            }

            req.user = userFromToken;

            next();
        } catch (err: any) {
            next(err);
        }
    }
}
export const authMiddleware = new AuthMiddleware();
