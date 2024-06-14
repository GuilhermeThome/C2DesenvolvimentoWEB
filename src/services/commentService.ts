import * as commentModel from '../models/commentModel';

export const getAllComments = async () => {
  return await commentModel.getComments();
};

export const getCommentById = async (id: number) => {
  return await commentModel.getCommentById(id);
};

export const createComment = async (data: { content: string; postId: number; authorId: number }) => {
  return await commentModel.createComment(data);
};

export const updateComment = async (id: number, data: { content?: string }) => {
  return await commentModel.updateComment(id, data);
};

export const deleteComment = async (id: number) => {
  return await commentModel.deleteComment(id);
};
