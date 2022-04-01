import bcrypt from 'bcrypt';

import { IUser } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async UpdateUserById(user:any, id:number):Promise<any> {
        return userRepository.UpdateUserById(user, id);
    }

    public async GetUserById(id:number):Promise<IUser> {
        return userRepository.getUserById(id);
    }

    public async GetUserByEmail(email:string):Promise<IUser> {
        return userRepository.getUserByEmail(email);
    }

    public async DeleteUser(id:number):Promise<any> {
        return userRepository.deleteUser(id);
    }

    public async GetUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async CreateUser(user:IUser): Promise<IUser> {
        const { password } = user;
        const newPassword = await UserService._hashPassword(password);
        const newUser = { ...user, password: newPassword };

        return userRepository.createUser(newUser);
    }

    public async compareUserPassword(password: string, hash: string):Promise<void | Error> {
        const isPasswordUniq = await bcrypt.compare(password, hash);

        if (!isPasswordUniq) {
            throw new Error('User is not exist...');
        }
    }

    private static _hashPassword(password:string):Promise<string> {
        return bcrypt.hash(password, 10);
    }

    public async UpdateUserPasswordById(
        user: Partial<IUser>,
        id: number,
    ): Promise<any | undefined> {
        let { password } = user;
        if (password) {
            password = await UserService._hashPassword(password);
        }
        return userRepository.UpdateUserPasswordById(user, id);
    }
}

export const userService = new UserService();
