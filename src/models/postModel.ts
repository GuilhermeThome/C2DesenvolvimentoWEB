import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPosts = async () => {
  return await prisma.post.findMany();
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({ where: { id } });
};

export const createPost = async (data: { title: string; content?: string; authorId: number }) => {
  return await prisma.post.create({ data });
};

export const updatePost = async (id: number, data: { title?: string; content?: string }) => {
  return await prisma.post.update({ where: { id }, data });
};

export const deletePost = async (id: number) => {
  return await prisma.post.delete({ where: { id } });
};
