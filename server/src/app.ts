import express from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import routes from './routes/auth.routes';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const startServer = async () => {
   const PORT = process.env.PORT as string;

   try {
      await connect();
      app.listen(PORT, () => {
         console.log(`Server has started on port: ${PORT} `);
         routes(app);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
