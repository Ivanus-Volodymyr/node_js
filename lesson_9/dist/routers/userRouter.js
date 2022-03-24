"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/', userController_1.userController.getUsers);
router.get('/:id', userController_1.userController.getUserById);
router.post('/email', userController_1.userController.getUserByEmail);
router.patch('/:id', middlewares_1.userMiddleware.checkUserid, middlewares_1.userMiddleware.checkUserFields, userController_1.userController.UpdateUserById);
router.delete('/:id', middlewares_1.userMiddleware.checkUserid, userController_1.userController.DeleteUserById);
exports.userRouter = router;
//# sourceMappingURL=userRouter.js.map