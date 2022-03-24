"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentService = void 0;
const commentRepository_1 = require("../repositories/comment/commentRepository");
class CommentService {
    async getComments() {
        return commentRepository_1.commentRepository.getComments();
    }
    async getCommentByUserId(userId) {
        return commentRepository_1.commentRepository.getCommentByUserId(userId);
    }
    async updateCommentLikeOrDislike(action, id) {
        return commentRepository_1.commentRepository.updateCommentLikeOrDislike(action, id);
    }
}
exports.commentService = new CommentService();
//# sourceMappingURL=commentService.js.map