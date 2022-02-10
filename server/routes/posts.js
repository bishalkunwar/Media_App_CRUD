import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/', createPost);
router.get('/:id', updatePost);
router.get('/:id', deletePost);
router.get('/:id', likePost);

export default router;