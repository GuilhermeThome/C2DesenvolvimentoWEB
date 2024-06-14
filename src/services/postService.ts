import * as postModel from '../models/postModel';

export const getAllPosts = async () => {
  return await postModel.getPosts();
};

export const getPostById = async (id: number) => {
  return await postModel.getPostById(id);
};

export const createPost = async (data: { title: string; content?: string; authorId: number }) => {
  return await postModel.createPost(data);
};

export const updatePost = async (id: number, data: { title?: string; content?: string }) => {
  return await postModel.updatePost(id, data);
};

export const deletePost = async (id: number) => {
  return await postModel.deletePost(id);
};
