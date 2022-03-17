import { IPost } from '../../interfaces/post.interface';

export interface IPostRepository{
  getPosts():Promise<IPost[]>
  getPostByUserId(userId:number): Promise<IPost[]>
  updateByUserId(post: any, userId: number):Promise<any>
}
