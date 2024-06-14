import { Request, Response } from 'express';
import * as commentModel from '../models/commentModel';

export const getAllComments = async (req: Request, res: Response) => {
  const comments = await commentModel.getComments();
  res.json(comments);
};

export const getComment = async (req: Request, res: Response) => {
  const comment = await commentModel.getCommentById(Number(req.params.id));
  res.json(comment);
};

export const createComment = async (req: Request, res: Response) => {
  const newComment = await commentModel.createComment(req.body);
  res.json(newComment);
};

export const updateComment = async (req: Request, res: Response) => {
  const updatedComment = await commentModel.updateComment(Number(req.params.id), req.body);
  res.json(updatedComment);
};

export const deleteComment = async (req: Request, res: Response) => {
  await commentModel.deleteComment(Number(req.params.id));
  res.status(204).end();
};
