"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const services_1 = require("../services");
class PostController {
    async getPosts(_req, res) {
        const posts = await services_1.postService.getPost();
        return res.json(posts);
    }
    async getPostByUserId(req, res) {
        const userId = Number(req.params.userId);
        const postByUserId = await services_1.postService.getPostByUserId(userId);
        return res.json(postByUserId);
    }
    async updateByUserId(req, res) {
        const userId = Number(req.params.userId);
        const newText = await services_1.postService.updateByUserId(req.body, userId);
        return res.json(newText);
    }
}
exports.postController = new PostController();
//# sourceMappingURL=postController.js.map