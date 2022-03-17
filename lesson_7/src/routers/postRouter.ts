import { Router } from 'express';

import { postController } from '../controllers/postController';

const route = Router();

route.get('/', postController.getPosts);
route.get('/:userId', postController.getPostByUserId);
route.patch('/:userId', postController.updateByUserId);

export const postRouter = route;
