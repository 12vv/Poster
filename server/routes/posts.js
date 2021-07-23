import express from "express";
//, getPost,  updatePost, likePost, deletePost
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;
