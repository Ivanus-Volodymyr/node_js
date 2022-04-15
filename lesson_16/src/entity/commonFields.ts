import {
    Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

import { ICommonFields } from '../interfaces/commonFields.interface';

export class CommonFields implements ICommonFields {
  @PrimaryGeneratedColumn()
      id: number;

  @Column({
      nullable: false,
      default: Date.now(),
  })
  @CreateDateColumn({ type: 'timestamp' })
      createdAt: string;

  @Column()
  @DeleteDateColumn({ type: 'timestamp' })
      deletedAt?: string;
}
