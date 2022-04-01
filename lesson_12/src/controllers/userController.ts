import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import { userService } from '../services';

class UserController {
    public async getUsers(_req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.GetUsers();
        return res.json(users);
    }

    public async getUserById(
        req: { params: {id: string}; },
        res:Response,
    ):Promise<Response<IUser>> {
        const id = Number(req.params.id);
        const usrById = await userService.GetUserById(id);
        return res.json(usrById);
    }

    public async getUserByEmail(
        req: { body: {email: string}},
        res: Response,
    ):Promise<Response<IUser>> {
        const { email } = req.body;
        const userByEmail = await userService.GetUserByEmail(email);
        return res.json(userByEmail);
    }

    public async UpdateUserById(
        req: { params: { id: string; }; body: any; },
        res: { json: (arg0: any) =>
              Response<IUser, Record<string, any>> |
              PromiseLike<Response<IUser, Record<string, any>>>; },
    )
      : Promise<Response<IUser>> {
        const id = Number(req.params.id);
        const userById = await userService.UpdateUserById(req.body, id);
        return res.json(userById);
    }

    public async DeleteUserById(req:{params: { id: string; }}, res: { json: (arg0: any) =>
          Response<IUser, Record<string, any>> |
          PromiseLike<Response<IUser, Record<string, any>>>; }):Promise<Response<IUser>> {
        const id = Number(req.params.id);
        const deleteUser = await userService.DeleteUser(id);
        return res.json(deleteUser);
    }

    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        const createdUser = await userService.CreateUser(req.body);
        return res.json(createdUser);
    }
}
export const userController = new UserController();
