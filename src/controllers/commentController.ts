import { Request, Response } from 'express';
import * as commentService from '../services/commentService';

export const getAllComments = async (req: Request, res: Response) => {
  const comments = await commentService.getAllComments();
  res.json(comments);
};

export const getComment = async (req: Request, res: Response) => {
  const comment = await commentService.getCommentById(Number(req.params.id));
  res.json(comment);
};

export const createComment = async (req: Request, res: Response) => {
  const newComment = await commentService.createComment(req.body);
  res.json(newComment);
};

export const updateComment = async (req: Request, res: Response) => {
  const updatedComment = await commentService.updateComment(Number(req.params.id), req.body);
  res.json(updatedComment);
};

export const deleteComment = async (req: Request, res: Response) => {
  await commentService.deleteComment(Number(req.params.id));
  res.status(204).end();
};
