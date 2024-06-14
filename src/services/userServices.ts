import * as userModel from '../models/userModel';

export const getAllUsers = async () => {
  return await userModel.getUsers();
};

export const getUserById = async (id: number) => {
  return await userModel.getUserById(id);
};

export const createUser = async (data: { email: string; name?: string }) => {
  return await userModel.createUser(data);
};

export const updateUser = async (id: number, data: { email?: string; name?: string }) => {
  return await userModel.updateUser(id, data);
};

export const deleteUser = async (id: number) => {
  return await userModel.deleteUser(id);
};
