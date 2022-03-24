"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const userService_1 = require("./userService");
const tokenService_1 = require("./tokenService");
class AuthService {
    async registration(body) {
        const { email } = body;
        const userFromDb = await userService_1.userService.GetUserByEmail(email);
        if (userFromDb) {
            throw new Error(`User with email ${email} already exist.....`);
        }
        const createdUser = await userService_1.userService.CreateUser(body);
        return AuthService._getTokenData(createdUser);
    }
    static async _getTokenData(data) {
        const { id, email } = data;
        const getTokenPair = await tokenService_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService_1.tokenService.saveToken(id, getTokenPair.refreshToken, getTokenPair.accessToken);
        return {
            ...getTokenPair,
            userId: id,
            userEmail: email,
        };
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=authService.js.map