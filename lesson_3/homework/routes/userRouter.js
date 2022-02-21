const {Router} = require('express');

const UserController = require('../controllers/userController');

//userRouter
const userRouter = Router();

userRouter.get('/', UserController.renderUsers);
userRouter.get('/:userId', UserController.getUserById);

module.exports = userRouter;
