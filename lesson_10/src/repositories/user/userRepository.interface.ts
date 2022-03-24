import { IUser } from '../../interfaces/user.interface';

export interface IUserRepository{
  getUsers():Promise<IUser[]>
  UpdateUserById(user: any, id:number):Promise<any>
  deleteUser(id:number):Promise<any>
  createUser(user:IUser):Promise<IUser>
}
