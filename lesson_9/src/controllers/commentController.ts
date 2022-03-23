import { Request, Response } from 'express';

import { IComments } from '../interfaces';
import { commentService } from '../services';

class CommentController {
    public async getComment(_req:Request, res:Response):Promise<Response<IComments>> {
        const comments = await commentService.getComments();
        return res.json(comments);
    }

    public async getCommentByUserId(
        req:{ params: { userId: string; }},
        res:Response,
    ):Promise<Response<IComments>> {
        const userId = Number(req.params.userId);
        const commentByUserId = await commentService.getCommentByUserId(userId);
        return res.json(commentByUserId);
    }

    public async updateCommentLikeOrDislike(
        req: {body: {action: string, id: string}},
        res: Response,
    ):Promise<Response<IComments>> {
        const id = Number(req.body.id);
        const comments = await commentService.updateCommentLikeOrDislike(req.body.action, id);
        return res.json(comments);
    }
}

export const commentController = new CommentController();
