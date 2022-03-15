"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const postRouter_1 = require("./postRouter");
const commentRouter_1 = require("./commentRouter");
const authRouter_1 = require("./authRouter");
const router = (0, express_1.Router)();
router.use('/auth', authRouter_1.authRouter);
router.use('/users', userRouter_1.userRouter);
router.use('/posts', postRouter_1.postRouter);
router.use('/comments', commentRouter_1.commentRouter);
exports.apiRouter = router;
//# sourceMappingURL=apiRoute.js.map