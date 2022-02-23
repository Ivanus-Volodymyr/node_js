const { Router } = require('express');

const UserController = require('../controllers/userController');
const DeleteController = require('../controllers/deleteController');

//userRouter
const userRouter = Router();

userRouter.get('/', UserController.renderUsers);
userRouter.get('/:userId', UserController.getUserById);
userRouter.post('/:id/delete', DeleteController.deleteUser);

module.exports = userRouter;
