"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentController = void 0;
const commentService_1 = require("../services/commentService");
class CommentController {
    async getComment(_req, res) {
        const comments = await commentService_1.commentService.getComments();
        return res.json(comments);
    }
    async getCommentByUserId(req, res) {
        const userId = Number(req.params.userId);
        const commentByUserId = await commentService_1.commentService.getCommentByUserId(userId);
        return res.json(commentByUserId);
    }
    async updateCommentLikeOrDislike(req, res) {
        const id = Number(req.body.id);
        const comments = await commentService_1.commentService.updateCommentLikeOrDislike(req.body.action, id);
        return res.json(comments);
    }
}
exports.commentController = new CommentController();
//# sourceMappingURL=commentController.js.map