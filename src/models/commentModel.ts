import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getComments = async () => {
  return await prisma.comment.findMany();
};

export const getCommentById = async (id: number) => {
  return await prisma.comment.findUnique({ where: { id } });
};

export const createComment = async (data: { content: string; postId: number; authorId: number }) => {
  return await prisma.comment.create({ data });
};

export const updateComment = async (id: number, data: { content?: string }) => {
  return await prisma.comment.update({ where: { id }, data });
};

export const deleteComment = async (id: number) => {
  return await prisma.comment.delete({ where: { id } });
};
