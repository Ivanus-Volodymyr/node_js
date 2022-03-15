import { ICommonFields } from './commonFields.interface';

export interface IToken extends ICommonFields{
  refreshToken: string;
  userId: number;
}
