import { Column, Entity, OneToMany } from 'typeorm';
import { CommonFields } from './commonFields';

import { IUser } from '../interfaces/user.interface';
import { Post } from './posts';
import { Comment } from './comments';

@Entity('Users', { database: 'root' })
export class User extends CommonFields implements IUser {
  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      firstName: string;

  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      lastName: string;

  @Column({
      type: 'int',
      default: 0,
  })
      age?: number;

  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
      unique: true,
  })
      phone: string;

  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
      unique: true,
  })
      email: string;

  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      password: string;

  @OneToMany(() => Post, (post) => post.user)
      posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
      comments: Comment[];
}
