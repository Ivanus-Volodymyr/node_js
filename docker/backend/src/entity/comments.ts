import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { IComments } from '../interfaces';
import { User } from './user';
import { Post } from './posts';

@Entity('Comments', { database: 'root' })
export class Comment extends CommonFields implements IComments {
  @Column({
      type: 'varchar',
      width: 255,
      nullable: false,
  })
      text: string;

  @Column({
      type: 'int',
  })
      like: number;

  @Column({
      type: 'int',
  })
      dislike: number;

  @Column({
      type: 'int',
  })
      postId: number;

  @Column({
      type: 'int',
  })
      authorId: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'authorId' })
      user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'postId' })
      post: Post;
}
