import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { User } from './user';
import { IActionToken } from '../interfaces';
import { ActionTokenType } from '../constans';

@Entity('ActionToken', { database: 'root' })
export class ActionToken extends CommonFields implements IActionToken {
  @Column({
      type: 'varchar',
      width: 250,
      nullable: false,
  })
      actionToken: string;

  @Column({
      type: 'varchar',
      width: 250,
      nullable: false,
  })
      type: ActionTokenType;

  @Column({
      type: 'int',
  })
      userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
      user: User;
}
