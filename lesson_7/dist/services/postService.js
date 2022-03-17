"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postService = void 0;
const postRepository_1 = require("../repositories/post/postRepository");
class PostService {
    async getPost() {
        return postRepository_1.postRepository.getPosts();
    }
    async getPostByUserId(userId) {
        return postRepository_1.postRepository.getPostByUserId(userId);
    }
    async updateByUserId(post, userId) {
        return postRepository_1.postRepository.updateByUserId(post, userId);
    }
}
exports.postService = new PostService();
//# sourceMappingURL=postService.js.map