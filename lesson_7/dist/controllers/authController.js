"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authService_1 = require("../services/authService");
const cookie_1 = require("../constans/cookie");
const tokenService_1 = require("../services/tokenService");
class AuthController {
    async registration(req, res) {
        const data = await authService_1.authService.registration(req.body);
        res.cookie(cookie_1.cookie.refreshToken, data.refreshToken, { maxAge: cookie_1.cookie.maxAge, httpOnly: true });
        res.json(data);
    }
    // public async login() {
    //
    // }
    //
    async logout(req, res) {
        const { id } = req.user;
        res.clearCookie(cookie_1.cookie.refreshToken);
        await tokenService_1.tokenService.deleteTokenPair(id);
        return res.json('OK');
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map