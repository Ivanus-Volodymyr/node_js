"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const userRepository_1 = require("../repositories/user/userRepository");
const validators_1 = require("../validators");
class UserMiddleware {
    async isUserExistInDB(req, res, next) {
        try {
            const userFromDB = await userRepository_1.userRepository.getUserByEmail(req.body.email);
            if (!userFromDB) {
                res.status(404).json('User not found....');
                return;
            }
            req.user = userFromDB;
            next();
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
    async checkUserFields(req, res, next) {
        try {
            const { error, value } = validators_1.userValidator.createUser.validate(req.body);
            if (error) {
                res.status(404).json(error.message);
                return;
            }
            req.body = value;
            next();
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
    async checkUserFieldsOnLogin(req, res, next) {
        try {
            const { error, value } = validators_1.userValidator.login.validate(req.body);
            if (error) {
                throw new Error(error.details[0].message);
            }
            req.body = value;
            next();
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
    async checkUserid(req, res, next) {
        try {
            const { error, value } = validators_1.paramsValidator.id.validate(req.params);
            if (error) {
                throw new Error(error.message);
            }
            req.params = value;
            next();
        }
        catch (err) {
            res.status(400).json(err.message);
        }
    }
}
exports.userMiddleware = new UserMiddleware();
//# sourceMappingURL=userMiddleware.js.map