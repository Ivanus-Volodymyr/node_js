import { Post } from '../entity/posts';
import { Comment } from '../entity/comments';

export interface IUser {
  id:number;
  firstName?: string;
  lastName: string;
  age?: number;
  phone: string;
  email: string;
  password: string;
  posts:Post[];
  comments: Comment[];
}
export interface IUserPayload {
  userId: number;
  userEmail:string;
 }
