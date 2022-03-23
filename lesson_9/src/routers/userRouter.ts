import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/email', userController.getUserByEmail);
router.patch('/:id', userController.UpdateUserById);
router.delete('/:id', userController.DeleteUserById);

export const userRouter = router;
