import { getManager } from 'typeorm';

import { IActionToken, IToken, ITokenDataToSave } from '../../interfaces';
import { Token } from '../../entity/token';
import { ITokenRepository } from './tokenRepository.interface';
import { ActionToken } from '../../entity/actionToken';

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

    public async createActionToken(actionToken: IActionToken): Promise<any> {
        return getManager().getRepository(ActionToken).save(actionToken);
    }

    public async getActionToken(token: Partial<IActionToken>): Promise<IActionToken | undefined> {
        return getManager().getRepository(ActionToken).findOne(token);
    }

    async deleteActionToken(actionToken: Partial<IActionToken>): Promise<any> {
        return getManager().getRepository(ActionToken).delete(actionToken);
    }
}
export const tokenRepository = new TokenRepository();
