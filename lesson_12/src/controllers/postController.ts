import { Request, Response } from 'express';

import { IPost } from '../interfaces';
import { postService } from '../services';

class PostController {
    public async getPosts(_req:Request, res:Response):Promise<Response<IPost[]>> {
        const posts = await postService.getPost();
        return res.json(posts);
    }

    public async getPostByUserId(
        req:{ params: { userId: string; }},
        res:Response,
    ):Promise<Response<IPost>> {
        const userId = Number(req.params.userId);
        const postByUserId = await postService.getPostByUserId(userId);
        return res.json(postByUserId);
    }

    public async updateByUserId(
        req: { params: { userId: any; }; body: IPost; },
        res: { json: (arg0: IPost) =>
            Response<IPost, Record<string, any>> |
            PromiseLike<Response<IPost, Record<string, any>>>; },
    ):Promise<Response<IPost>> {
        const userId = Number(req.params.userId);
        const newText = await postService.updateByUserId(req.body, userId);
        return res.json(newText);
    }
}
export const postController = new PostController();
