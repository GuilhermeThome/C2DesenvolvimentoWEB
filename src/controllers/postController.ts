import { Request, Response } from 'express';
import * as postModel from '../models/postModel';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postModel.getPosts();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await postModel.getPostById(Number(req.params.id));
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const newPost = await postModel.createPost(req.body);
  res.json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
  const updatedPost = await postModel.updatePost(Number(req.params.id), req.body);
  res.json(updatedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  await postModel.deletePost(Number(req.params.id));
  res.status(204).end();
};
