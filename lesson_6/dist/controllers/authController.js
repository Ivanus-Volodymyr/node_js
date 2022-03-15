"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authService_1 = require("../services/authService");
class AuthController {
    async registration(req, res) {
        const data = await authService_1.authService.registration(req.body);
        res.cookie('refreshToken', data.refreshToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
        res.json(data);
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map