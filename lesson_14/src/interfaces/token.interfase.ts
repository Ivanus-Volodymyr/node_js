import { ICommonFields } from './commonFields.interface';
import { ActionTokenType } from '../constans';

export interface IToken extends ICommonFields{
  refreshToken: string;
  accessToken:string;
  userId: number;
}

export interface ITokenPair {
  accessToken: string;
  refreshToken: string;
}
export interface ITokenDataToSave {
  userId: number;
  refreshToken: string;
  accessToken: string;
}
export interface IActionToken {
  actionToken: string;
  type: ActionTokenType;
  userId: number;
}
