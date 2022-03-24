import {
    Column, Entity, JoinColumn, ManyToOne, OneToMany,
} from 'typeorm';
import { CommonFields } from './commonFields';

import { IPost } from '../interfaces/post.interface';
import { User } from './user';
import { Comment } from './comments';

@Entity('Posts', { database: 'root' })
export class Post extends CommonFields implements IPost {
  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      title: string;

  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      text: string;

  @Column({
      type: 'int',
  })
      userId: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
      user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
      comments: Comment[];
}
