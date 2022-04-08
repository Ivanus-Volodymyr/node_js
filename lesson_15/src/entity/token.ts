import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { User } from './user';
import { IToken } from '../interfaces';

@Entity('Tokens', { database: 'root' })
export class Token extends CommonFields implements IToken {
  @Column({
      type: 'varchar',
      width: 250,
      nullable: false,
  })
      refreshToken: string;

  @Column({
      type: 'varchar',
      width: 250,
      nullable: false,
  })
      accessToken: string;

  @Column({
      type: 'int',
  })
      userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
      user: User;
}
