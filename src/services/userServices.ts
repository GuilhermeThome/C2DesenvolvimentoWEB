import bcrypt from 'bcryptjs';
import * as userModel from '../models/userModel';

export const getAllUsers = async () => {
  return await userModel.getUsers();
};

export const getUserById = async (id: number) => {
  return await userModel.getUserById(id);
};

export const createUser = async (data: { email: string; name?: string; password: string }) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return await userModel.createUser({ ...data, password: hashedPassword });
};

export const updateUser = async (id: number, data: { email?: string; name?: string; password?: string }) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return await userModel.updateUser(id, data);
};

export const deleteUser = async (id: number) => {
  return await userModel.deleteUser(id);
};

export const getUserByEmail = async (email: string) => {
  return await userModel.getUserByEmail(email);
};
