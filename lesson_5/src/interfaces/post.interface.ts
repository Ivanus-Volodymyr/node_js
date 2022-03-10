import { Comment } from '../entity/comments';

export interface IPost {
  title: string;
  text: string;
  userId: number;
  comments: Comment[];
}
