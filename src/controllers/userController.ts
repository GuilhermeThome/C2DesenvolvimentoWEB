import { Request, Response } from 'express';
import * as userModel from '../models/userModel';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userModel.getUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userModel.getUserById(Number(req.params.id));
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = await userModel.createUser(req.body);
  res.json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await userModel.updateUser(Number(req.params.id), req.body);
  res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  await userModel.deleteUser(Number(req.params.id));
  res.status(204).end();
};
