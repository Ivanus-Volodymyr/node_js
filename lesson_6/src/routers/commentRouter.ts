import { Router } from 'express';
import { commentController } from '../controllers/commentController';

const router = Router();

router.get('/', commentController.getComment);
router.get('/:userId', commentController.getCommentByUserId);
router.patch('/action', commentController.updateCommentLikeOrDislike);

export const commentRouter = router;
