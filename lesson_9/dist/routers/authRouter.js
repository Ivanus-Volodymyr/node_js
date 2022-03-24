"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const middlewares_1 = require("../middlewares");
const route = (0, express_1.Router)();
route.post('/registration', middlewares_1.userMiddleware.checkUserFields, authController_1.authController.registration);
route.post('/login', middlewares_1.userMiddleware.checkUserFieldsOnLogin, middlewares_1.userMiddleware.isUserExistInDB, authController_1.authController.login);
route.post('/logout', middlewares_1.authMiddleware.checkAccessToken, authController_1.authController.logout);
route.post('/refresh', middlewares_1.authMiddleware.checkRefreshToken, authController_1.authController.refresh);
exports.authRouter = route;
//# sourceMappingURL=authRouter.js.map