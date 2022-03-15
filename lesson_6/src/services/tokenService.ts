import jwt from 'jsonwebtoken';

import { configEnv } from '../configs/configEnv';
import { IToken } from '../interfaces/token.interfase';
import { tokenRepository } from '../repositories/token/tokenRepository';

class TokenService {
    public async generateTokenPair(
        payload:any,
    ):Promise<{accessToken: string, refreshToken:string}> {
        const accessToken = jwt.sign(payload, configEnv.secret_key as string, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, configEnv.secret_key_refresh as string, { expiresIn: '1d' });
        return {
            refreshToken,
            accessToken,
        };
    }

    public async saveToken(userId:number, refreshToken: string):Promise<IToken> {
        const tokenFromDb = await tokenRepository.findTokenByUserId(userId);
        if (tokenFromDb) {
            tokenFromDb.refreshToken = refreshToken;
            return tokenRepository.createToken(tokenFromDb);
        }
        return tokenRepository.createToken({
            refreshToken,
            userId,
        });
    }
}
export const tokenService = new TokenService();
