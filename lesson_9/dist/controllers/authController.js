"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const cookie_1 = require("../constans/cookie");
const services_1 = require("../services");
const tokenRepository_1 = require("../repositories/token/tokenRepository");
class AuthController {
    async registration(req, res) {
        const data = await services_1.authService.registration(req.body);
        res.cookie(cookie_1.cookie.refreshToken, data.refreshToken, { maxAge: cookie_1.cookie.maxAge, httpOnly: true });
        res.json(data);
    }
    async login(req, res) {
        try {
            const { id, email, password: hashPassword } = req.user;
            const { password } = req.body;
            await services_1.userService.compareUserPassword(password, hashPassword);
            const { accessToken, refreshToken, } = services_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
            await tokenRepository_1.tokenRepository.createToken({ refreshToken, accessToken, userId: id });
            res.json({
                refreshToken,
                accessToken,
                user: req.user,
                Result: 'Ok',
            });
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
    async logout(req, res) {
        const { id } = req.user;
        res.clearCookie(cookie_1.cookie.refreshToken);
        await services_1.tokenService.deleteTokenPair(id);
        return res.json('OK');
    }
    async refresh(req, res) {
        try {
            const { id, email } = req.user;
            const refreshTokenToDelete = req.get('Authorization');
            await services_1.tokenService.deleteTokenPairByParams({ refreshToken: refreshTokenToDelete });
            const { accessToken, refreshToken, } = services_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
            await tokenRepository_1.tokenRepository.createToken({ refreshToken, accessToken, userId: id });
            res.json({
                refreshToken,
                accessToken,
                user: req.user,
                Result: 'Ok',
            });
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map