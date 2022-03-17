import { Request, Response } from 'express';

import { authService } from '../services/authService';
import { cookie } from '../constans/cookie';
import { tokenService } from '../services/tokenService';
import { IRequestExtended } from '../interfaces/requestExtended.interface';
import { IUser } from '../interfaces/user.interface';

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

    public async logout(req:IRequestExtended, res:Response): Promise<Response<string>> {
        const { id } = req.user as IUser;

        res.clearCookie(cookie.refreshToken);
        await tokenService.deleteTokenPair(id);
        return res.json('OK');
    }
}
export const authController = new AuthController();
