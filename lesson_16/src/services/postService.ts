import { IPost } from '../interfaces/post.interface';
import { postRepository } from '../repositories/post/postRepository';

class PostService {
    public async getPost():Promise<IPost[]> {
        return postRepository.getPosts();
    }

    public async getPostByUserId(userId:number):Promise<IPost[]> {
        return postRepository.getPostByUserId(userId);
    }

    public async updateByUserId(post:IPost, userId: number):Promise<IPost> {
        return postRepository.updateByUserId(post, userId);
    }
}

export const postService = new PostService();
