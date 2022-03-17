import { IToken } from '../../interfaces/token.interfase';

export interface ITokenRepository {
  createToken(token:any): Promise<IToken>
  findTokenByUserId(userId:number):Promise<IToken | undefined>
}
