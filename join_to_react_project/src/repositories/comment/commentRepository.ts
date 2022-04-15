import { EntityRepository, getManager, Repository } from 'typeorm';
import * as http from 'http';

import { IComments } from '../../interfaces/comments.interfase';
import { Comment } from '../../entity/comments';
import { ICommentRepository } from './commentRepository.interface';

@EntityRepository(Comment)
class CommentRepository extends Repository<Comment> implements ICommentRepository {
    public async getComments():Promise<IComments[]> {
        return getManager().getRepository(Comment).find();
    }

    public async getCommentByUserId(userId: number): Promise<IComments[]> {
        return getManager().getRepository(Comment)
            .createQueryBuilder('comment')
            .where('comment.authorId = :userId', { userId })
            .leftJoinAndSelect('comment.post', 'post')
            .leftJoinAndSelect('comment.user', 'user')
            .getMany();
    }

    public async updateCommentLikeOrDislike(action:string, id: number): Promise<any> {
        try {
            const comment = await getManager().getRepository(Comment)
                .createQueryBuilder('comment')
                .where(`comment.id=${id}`)
                .getOne();
            if (!comment) {
                throw new Error('have no comments on such id...........');
            }
            if (action === 'like') {
                await getManager().getRepository(Comment)
                    .update({ id }, { like: comment.like + 1 });
            }
            if (action === 'dislike') {
                await getManager().getRepository(Comment)
                    .update({ id }, { dislike: comment.dislike + 1 });
            }
            return http.STATUS_CODES['201'];
        } catch (err: any) {
            return err.message;
        }
    }
}

export const commentRepository = new CommentRepository();
