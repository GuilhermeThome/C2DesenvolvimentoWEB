import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRouter from './routers/userRouter';
import postRouter from './routers/postRouter';
import commentRouter from './routers/commentRouter';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
