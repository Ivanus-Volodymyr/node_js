import { getManager } from 'typeorm';

import { IToken, ITokenDataToSave } from '../../interfaces';
import { Token } from '../../entity/token';
import { ITokenRepository } from './tokenRepository.interface';

class TokenRepository implements ITokenRepository {
    public async createToken(token:ITokenDataToSave): Promise<IToken> {
        return getManager().getRepository(Token).save(token);
    }

    public async findTokenByUserId(userId:number):Promise<IToken | undefined > {
        return getManager().getRepository(Token).findOne({ userId });
    }

    public findByParams(filterObject:Partial<IToken>): Promise<IToken | undefined > {
        return getManager().getRepository(Token).findOne(filterObject);
    }

    public async deleteByParams(params:Partial<IToken>):Promise<any> {
        return getManager().getRepository(Token).delete(params);
    }
}
export const tokenRepository = new TokenRepository();
