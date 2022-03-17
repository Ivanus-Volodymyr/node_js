"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRepository_1 = require("../repositories/user/userRepository");
class UserService {
    async UpdateUserById(user, id) {
        return userRepository_1.userRepository.UpdateUserById(user, id);
    }
    async GetUserById(id) {
        return userRepository_1.userRepository.getUserById(id);
    }
    async GetUserByEmail(email) {
        return userRepository_1.userRepository.getUserByEmail(email);
    }
    async DeleteUser(id) {
        return userRepository_1.userRepository.deleteUser(id);
    }
    async GetUsers() {
        return userRepository_1.userRepository.getUsers();
    }
    async CreateUser(user) {
        const { password } = user;
        const newPassword = await UserService._hashPassword(password);
        const newUser = { ...user, password: newPassword };
        return userRepository_1.userRepository.createUser(newUser);
    }
    static _hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
}
exports.userService = new UserService();
//# sourceMappingURL=userService.js.map