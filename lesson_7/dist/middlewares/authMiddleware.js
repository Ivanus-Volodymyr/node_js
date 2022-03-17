"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const tokenService_1 = require("../services/tokenService");
const userService_1 = require("../services/userService");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const token = req.get('Authorization');
            if (!token) {
                throw new Error('no token.....');
            }
            const { userEmail } = tokenService_1.tokenService.verifyToken(token);
            const userFromToken = await userService_1.userService.GetUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('wrong email.....');
            }
            req.user = userFromToken;
            next();
        }
        catch (err) {
            res.json({
                status: 401,
                message: err.message,
            });
        }
    }
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=authMiddleware.js.map