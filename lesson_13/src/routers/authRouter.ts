import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware, userMiddleware } from '../middlewares';

const route = Router();

route.post('/registration', userMiddleware.checkUserFields, authController.registration);
route.post('/login', userMiddleware.checkUserFieldsOnLogin, userMiddleware.isUserExistInDB, authController.login);
route.post('/logout', authMiddleware.checkAccessToken, authController.logout);
route.post('/refresh', authMiddleware.checkRefreshToken, authController.refresh);

route.post('/password', userMiddleware.checkEmail, userMiddleware.isUserExistInDB, authController.sendMail);
route.post('/change', userMiddleware.checkInputPasswords, authMiddleware.checkActionToken, authController.saveNewPassword);

export const authRouter = route;
