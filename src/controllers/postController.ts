import { Request, Response } from 'express';
import * as postService from '../services/postService';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await postService.getPostById(Number(req.params.id));
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const newPost = await postService.createPost(req.body);
  res.json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
  const updatedPost = await postService.updatePost(Number(req.params.id), req.body);
  res.json(updatedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  await postService.deletePost(Number(req.params.id));
  res.status(204).end();
};
