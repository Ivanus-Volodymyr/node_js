"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const route = (0, express_1.Router)();
route.get('/', postController_1.postController.getPosts);
route.get('/:userId', postController_1.postController.getPostByUserId);
route.patch('/:userId', postController_1.postController.updateByUserId);
exports.postRouter = route;
//# sourceMappingURL=postRouter.js.map