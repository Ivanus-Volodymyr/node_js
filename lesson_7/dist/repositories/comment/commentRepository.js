"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRepository = void 0;
const typeorm_1 = require("typeorm");
const http = __importStar(require("http"));
const comments_1 = require("../../entity/comments");
let CommentRepository = class CommentRepository extends typeorm_1.Repository {
    async getComments() {
        return (0, typeorm_1.getManager)().getRepository(comments_1.Comment).find();
    }
    async getCommentByUserId(userId) {
        return (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
            .createQueryBuilder('comment')
            .where('comment.authorId = :userId', { userId })
            .leftJoinAndSelect('comment.post', 'post')
            .leftJoinAndSelect('comment.user', 'user')
            .getMany();
    }
    async updateCommentLikeOrDislike(action, id) {
        try {
            const comment = await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
                .createQueryBuilder('comment')
                .where(`comment.id=${id}`)
                .getOne();
            if (!comment) {
                throw new Error('have no comments on such id...........');
            }
            if (action === 'like') {
                await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
                    .update({ id }, { like: comment.like + 1 });
            }
            if (action === 'dislike') {
                await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
                    .update({ id }, { dislike: comment.dislike + 1 });
            }
            return http.STATUS_CODES['201'];
        }
        catch (err) {
            return err.message;
        }
    }
};
CommentRepository = __decorate([
    (0, typeorm_1.EntityRepository)(comments_1.Comment)
], CommentRepository);
exports.commentRepository = new CommentRepository();
//# sourceMappingURL=commentRepository.js.map