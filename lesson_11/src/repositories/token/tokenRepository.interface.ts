import { IToken } from '../../interfaces';

export interface ITokenRepository {
  createToken(token:any): Promise<IToken>
  findTokenByUserId(userId:number):Promise<IToken | undefined>
  findByParams(filterObject:Partial<IToken>): Promise<IToken | undefined >
  deleteByParams(params:Partial<IToken>):Promise<any>
}
