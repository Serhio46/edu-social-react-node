import express from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

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
