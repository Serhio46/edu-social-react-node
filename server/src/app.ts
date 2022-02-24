import express, { Request } from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import router from './routes';
import errorMiddleware from './middleware/error.middleware';

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: '*',
   },
});

io.on('connection', (socket) => {
   console.log(socket.id);
   console.log('conected clinet');
   //socket.send('Welcom to chat');
   io.emit('welcome', 'welcome to chat');

   socket.on('userMessage', (msg) => {
      console.log(JSON.parse(msg));
      io.emit('sendMessage', msg);
   });

   const count = io.engine.clientsCount;
   console.log(count);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware);

const startServer = async () => {
   const PORT = process.env.PORT as string;

   try {
      await connect();
      server.listen(PORT, () => {
         console.log(`Server has started on port: ${PORT} `);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
