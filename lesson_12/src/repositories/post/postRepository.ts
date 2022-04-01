import { EntityRepository, getManager, Repository } from 'typeorm';

import { Post } from '../../entity/posts';
import { IPost } from '../../interfaces/post.interface';
import { IPostRepository } from './posRepository.interface';

@EntityRepository(Post)
class PostRepository extends Repository<Post> implements IPostRepository {
    public async getPosts():Promise<IPost[]> {
        return getManager().getRepository(Post).find({ relations: ['comments'] });
    }

    public async getPostByUserId(userId:number): Promise<IPost[]> {
        return getManager().getRepository(Post).find({ userId });
    }

    public async updateByUserId(post: any, userId: number):Promise<any> {
        const { text } = post;
        return getManager()
            .getRepository(Post)
            .update({ userId }, { text });
    }
}

export const postRepository = new PostRepository();
