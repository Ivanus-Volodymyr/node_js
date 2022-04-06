import { IUser } from '../interfaces';
import { tokenService } from './tokenService';

class AuthService {
    public async getTokenData(createdUser:IUser): Promise<any> {
        return this._getTokenData(createdUser);
    }

    private async _getTokenData(data:IUser) {
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
