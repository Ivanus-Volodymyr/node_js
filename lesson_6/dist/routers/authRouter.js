"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const route = (0, express_1.Router)();
route.post('/registration', authController_1.authController.registration);
// route.post('/login', authController.login);
// route.post('/logout', authController.logout);
exports.authRouter = route;
//# sourceMappingURL=authRouter.js.map