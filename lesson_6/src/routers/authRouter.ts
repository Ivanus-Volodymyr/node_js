import { Router } from 'express';
import { authController } from '../controllers/authController';

const route = Router();

route.post('/registration', authController.registration);
// route.post('/login', authController.login);
// route.post('/logout', authController.logout);

export const authRouter = route;
