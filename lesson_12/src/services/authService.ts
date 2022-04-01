import { IUser } from '../interfaces';
import { userService } from './userService';
import { tokenService } from './tokenService';

class AuthService {
    public async registration(body:IUser): Promise<any> {
        const { email } = body;
        const userFromDb = await userService.GetUserByEmail(email);
        if (userFromDb) {
            throw new Error(`User with email ${email} already exist.....`);
        }

        const createdUser = await userService.CreateUser(body);
        return AuthService._getTokenData(createdUser);
    }

    private static async _getTokenData(data:IUser) {
        const { id, email } = data;
        const getTokenPair = await tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService.saveToken(id, getTokenPair.refreshToken, getTokenPair.accessToken);

        return {
            ...getTokenPair,
            userId: id,
            userEmail: email,
        };
    }
}
export const authService = new AuthService();
