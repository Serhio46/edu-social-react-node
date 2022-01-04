import express from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import errorMiddleware from './middleware/error.middleware';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use(errorMiddleware);

const startServer = async () => {
   const PORT = process.env.PORT as string;

   try {
      await connect();
      app.listen(PORT, () => {
         console.log(`Server has started on port: ${PORT} `);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
