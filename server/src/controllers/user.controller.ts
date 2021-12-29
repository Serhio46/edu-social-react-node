import { Request, Response } from 'express';
import userService from '../sevices/user.service';

class UserController {
   async registration(req: Request, res: Response) {
      try {
         const { email, password, roles, userName } = req.body;
         const userData = await userService.registartion(email, password, roles, userName);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error) {
         console.log(error);
         res.send({ message: 'Server errror' });
      }
   }
}

export default new UserController();
