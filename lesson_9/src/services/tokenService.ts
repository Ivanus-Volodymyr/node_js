import jwt from 'jsonwebtoken';

import { configEnv } from '../configs/configEnv';
import { IToken, ITokenPair, IUserPayload } from '../interfaces';
import { tokenRepository } from '../repositories/token/tokenRepository';

class TokenService {
    public generateTokenPair(
        payload:IUserPayload,
    ): ITokenPair {
        const accessToken = jwt.sign(payload, configEnv.secret_key as string, { expiresIn: '1d' });
        const refreshToken = jwt.sign(payload, configEnv.secret_key_refresh as string, { expiresIn: '1d' });
        return {
            refreshToken,
            accessToken,
        };
    }

    public async saveToken(
        userId:number,
        refreshToken: string,
        accessToken: string,
    ):Promise<IToken> {
        const tokenFromDb = await tokenRepository.findTokenByUserId(userId);
        if (tokenFromDb) {
            tokenFromDb.refreshToken = refreshToken;
            tokenFromDb.accessToken = accessToken;
            return tokenRepository.createToken(tokenFromDb);
        }
        return tokenRepository.createToken({
            refreshToken,
            accessToken,
            userId,
        });
    }

    verifyToken(token: string, tokenType = 'access'): IUserPayload {
        let secretWord = configEnv.secret_key;

        if (tokenType === 'refresh') {
            secretWord = configEnv.secret_key_refresh;
        }

        return jwt.verify(token, secretWord as string) as IUserPayload;
    }

    public async deleteTokenPair(userId: number) {
        return tokenRepository.deleteByParams({ userId });
    }

    public async deleteTokenPairByParams(object: Partial<IToken>) {
        return tokenRepository.deleteByParams(object);
    }
}
export const tokenService = new TokenService();
