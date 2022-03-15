"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = require("express");
const commentController_1 = require("../controllers/commentController");
const router = (0, express_1.Router)();
router.get('/', commentController_1.commentController.getComment);
router.get('/:userId', commentController_1.commentController.getCommentByUserId);
router.patch('/action', commentController_1.commentController.updateCommentLikeOrDislike);
exports.commentRouter = router;
//# sourceMappingURL=commentRouter.js.map