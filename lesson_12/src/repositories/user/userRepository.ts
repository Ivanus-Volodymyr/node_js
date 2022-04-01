import { EntityRepository, getManager, Repository } from 'typeorm';

import { IUser } from '../../interfaces/user.interface';
import { User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers():Promise<IUser[]> {
        return getManager().getRepository(User).find();
    }

    public async getUserById(id:number):Promise<any> {
        return getManager().getRepository(User).find({ id });
    }

    public async getUserByEmail(email: string):Promise<any> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOne();
    }

    public async UpdateUserById(user: any, id:number):Promise<any> {
        const { email, password } = user;
        return getManager()
            .getRepository(User)
            .update({ id }, { email, password });
    }

    public async UpdateUserPasswordById(user: Partial<IUser>, id:number):Promise<any> {
        const { password } = user;
        return getManager()
            .getRepository(User)
            .update({ id }, { password });
    }

    public async deleteUser(id:number):Promise<any> {
        return getManager()
            .getRepository(User)
            .softDelete({ id });
    }

    public async createUser(user: IUser):Promise<IUser> {
        return getManager()
            .getRepository(User)
            .save(user);
    }
}

export const userRepository = new UserRepository();
