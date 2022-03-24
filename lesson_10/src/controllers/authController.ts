import { NextFunction, Request, Response } from 'express';

import { cookie } from '../constans/cookie';
import { tokenService, userService, authService } from '../services';
import { IRequestExtended, IUser } from '../interfaces';
import { tokenRepository } from '../repositories/token/tokenRepository';

class AuthController {
    public async registration(req:Request, res:Response) {
        const data = await authService.registration(req.body);
        res.cookie(
            cookie.refreshToken,
            data.refreshToken,
            { maxAge: cookie.maxAge, httpOnly: true },
        );
        res.json(data);
    }

    public async login(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const { id, email, password: hashPassword } = req.user as IUser;
            const { password } = req.body;

            await userService.compareUserPassword(password, hashPassword);

            const {
                accessToken,
                refreshToken,
            } = tokenService.generateTokenPair({ userId: id, userEmail: email });

            await tokenRepository.createToken({ refreshToken, accessToken, userId: id });

            res.json({
                refreshToken,
                accessToken,
                user: req.user,
                Result: 'Ok',
            });
        } catch (err: any) {
            next(err);
        }
    }

    public async logout(req:IRequestExtended, res:Response): Promise<Response<string>> {
        const { id } = req.user as IUser;

        res.clearCookie(cookie.refreshToken);

        await tokenService.deleteTokenPair(id);
        return res.json('OK');
    }

    public async refresh(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const { id, email } = req.user as IUser;
            const refreshTokenToDelete = req.get('Authorization');
            await tokenService.deleteTokenPairByParams({ refreshToken: refreshTokenToDelete });

            const {
                accessToken,
                refreshToken,
            } = tokenService.generateTokenPair({ userId: id, userEmail: email });

            await tokenRepository.createToken({ refreshToken, accessToken, userId: id });

            res.json({
                refreshToken,
                accessToken,
                user: req.user,
                Result: 'Ok',
            });
        } catch (err: any) {
            next(err);
        }
    }
}
export const authController = new AuthController();
