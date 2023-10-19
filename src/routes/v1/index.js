import express from 'express';

import { createTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);

router.post('/comments', createComment);

router.post('/likes/toggle',toggleLike);

export default router;

