import { Router } from 'express';
import { userController } from '../controllers/userController';
import { userMiddleware } from '../middlewares';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/email', userController.getUserByEmail);
router.patch('/:id', userMiddleware.checkUserid, userMiddleware.checkUserFields, userController.UpdateUserById);
router.delete('/:id', userMiddleware.checkUserid, userController.DeleteUserById);

export const userRouter = router;
