const {Router} = require('express');

const LoginController = require('../controllers/loginController');
const isUserValidMiddleware = require('../middleware/isUserValid');
const IsEmailExist = require('../middleware/isEmailExist');

//loginRouter
const loginRouter = Router();

loginRouter.get('/', LoginController.renderLogin);
loginRouter.post('/', isUserValidMiddleware, IsEmailExist, LoginController.renderLoginSome);

module.exports = loginRouter;