"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
class UserController {
    async getUsers(_req, res) {
        const users = await userService_1.userService.GetUsers();
        return res.json(users);
    }
    async getUserById(req, res) {
        const id = Number(req.params.id);
        const usrById = await userService_1.userService.GetUserById(id);
        return res.json(usrById);
    }
    async getUserByEmail(req, res) {
        const { email } = req.body;
        const userByEmail = await userService_1.userService.GetUserByEmail(email);
        return res.json(userByEmail);
    }
    async UpdateUserById(req, res) {
        const id = Number(req.params.id);
        const userById = await userService_1.userService.UpdateUserById(req.body, id);
        return res.json(userById);
    }
    async DeleteUserById(req, res) {
        const id = Number(req.params.id);
        const deleteUser = await userService_1.userService.DeleteUser(id);
        return res.json(deleteUser);
    }
    async createUser(req, res) {
        const createdUser = await userService_1.userService.CreateUser(req.body);
        return res.json(createdUser);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map