import { IComments } from '../../interfaces/comments.interfase';

export interface ICommentRepository{
  getComments():Promise<IComments[]>
  getCommentByUserId(userId: number): Promise<IComments[]>
  updateCommentLikeOrDislike(action:string, id: number): Promise<any>
}
