import { Express, Request, Response } from 'express';
import userController from '../controllers/user.controller';

export default function (app: Express) {
   app.get('/api/auth', userController.registration);
}
