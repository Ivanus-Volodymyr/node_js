import { IComments } from '../interfaces/comments.interfase';
import { commentRepository } from '../repositories/comment/commentRepository';

class CommentService {
    public async getComments():Promise<IComments[]> {
        return commentRepository.getComments();
    }

    public async getCommentByUserId(userId:number): Promise<IComments[]> {
        return commentRepository.getCommentByUserId(userId);
    }

    public async updateCommentLikeOrDislike(action:string, id: number): Promise<IComments> {
        return commentRepository.updateCommentLikeOrDislike(action, id);
    }
}
export const commentService = new CommentService();
