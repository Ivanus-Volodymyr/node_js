import { NextFunction, Request, Response } from 'express';

import { ActionTokenType, cookie, EmailActionEnums } from '../constans';
import {
    authService, emailService, tokenService, userService,
} from '../services';
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
            const {
                id, lastName, email, password: hashPassword,
            } = req.user as IUser;

            const { password } = req.body;

            await emailService.sendMail(EmailActionEnums.WELCOME, email, { user: lastName });

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

    public async sendMail(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const { id, email, lastName } = req.user as IUser;

            const actionToken = tokenService.generateActionToken({ userId: id, userEmail: email });

            await tokenRepository.createActionToken(
                { actionToken, type: ActionTokenType.FORGOT_PASSWORD, userId: id },
            );

            await emailService.sendMail(
                EmailActionEnums.FORGOT_PASSWORD,
                email,
                { user: lastName, actionToken },
            );

            res.json({
                Result: 'Ok',
            }).status(201);
        } catch (err: any) {
            next(err);
        }
    }

    public async saveNewPassword(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const actionToken = req.get('Authorization');
            const { id } = req.user as IUser;

            await userService.UpdateUserPasswordById(req.body, id);
            await tokenRepository.deleteActionToken({ actionToken });

            res.json('Password Updated').status(200);
            return;
        } catch (err) {
            next(err);
        }
    }
}
export const authController = new AuthController();
