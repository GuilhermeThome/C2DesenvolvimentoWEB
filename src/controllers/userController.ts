import { Request, Response } from 'express';
import * as userService from '../services/userService';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION } from '../config';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUserById(Number(req.params.id));
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req.body);
  const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  res.json({ token, user: newUser });
};

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
  res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  await userService.deleteUser(Number(req.params.id));
  res.status(204).end();
};

