import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as userService from './userService';
import { JWT_SECRET, JWT_EXPIRATION } from '../config';

export const login = async (email: string, password: string) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  return { token, user };
};
