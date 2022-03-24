"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configEnv_1 = require("../configs/configEnv");
const tokenRepository_1 = require("../repositories/token/tokenRepository");
class TokenService {
    generateTokenPair(payload) {
        const accessToken = jsonwebtoken_1.default.sign(payload, configEnv_1.configEnv.secret_key, { expiresIn: '1d' });
        const refreshToken = jsonwebtoken_1.default.sign(payload, configEnv_1.configEnv.secret_key_refresh, { expiresIn: '1d' });
        return {
            refreshToken,
            accessToken,
        };
    }
    async saveToken(userId, refreshToken, accessToken) {
        const tokenFromDb = await tokenRepository_1.tokenRepository.findTokenByUserId(userId);
        if (tokenFromDb) {
            tokenFromDb.refreshToken = refreshToken;
            tokenFromDb.accessToken = accessToken;
            return tokenRepository_1.tokenRepository.createToken(tokenFromDb);
        }
        return tokenRepository_1.tokenRepository.createToken({
            refreshToken,
            accessToken,
            userId,
        });
    }
    verifyToken(token, tokenType = 'access') {
        let secretWord = configEnv_1.configEnv.secret_key;
        if (tokenType === 'refresh') {
            secretWord = configEnv_1.configEnv.secret_key_refresh;
        }
        return jsonwebtoken_1.default.verify(token, secretWord);
    }
    async deleteTokenPair(userId) {
        return tokenRepository_1.tokenRepository.deleteByParams({ userId });
    }
    async deleteTokenPairByParams(object) {
        return tokenRepository_1.tokenRepository.deleteByParams(object);
    }
}
exports.tokenService = new TokenService();
//# sourceMappingURL=tokenService.js.map