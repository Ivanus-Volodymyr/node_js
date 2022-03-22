import { Request, Response } from 'express';

import { authService } from '../services/authService';
import { cookie } from '../constans/cookie';
import { tokenService } from '../services/tokenService';
import { IRequestExtended } from '../interfaces/requestExtended.interface';
import { IUser } from '../interfaces/user.interface';
import { tokenRepository } from '../repositories/token/tokenRepository';
import { userService } from '../services/userService';

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

    public async login(req:IRequestExtended, res:Response) {
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
            console.log(err);
            res.status(400).json(err.message);
        }
    }

    public async logout(req:IRequestExtended, res:Response): Promise<Response<string>> {
        const { id } = req.user as IUser;

        res.clearCookie(cookie.refreshToken);

        await tokenService.deleteTokenPair(id);
        return res.json('OK');
    }
}
export const authController = new AuthController();
