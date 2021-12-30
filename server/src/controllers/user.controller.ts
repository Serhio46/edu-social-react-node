import { Request, Response } from 'express';
import userService from '../sevices/user.service';

class UserController {
   async registration(req: Request, res: Response) {
      try {
         const { email, password, roles, userName } = req.body;
         const userData = await userService.registartion(email, password, roles, userName);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error: any) {
         res.send({ message: `${error}` });
      }
   }

   async deleteUser(req: Request, res: Response) {
      try {
         const currentUser = req.body.userId;
         const deletedUser = req.params.id;
         await userService.deleteUser(currentUser, deletedUser);
         res.status(200).json('Account has been deleted');
      } catch (error) {
         res.status(403).send({ message: `${error}` });
      }
   }

   async updateUser(req: Request, res: Response) {
      try {
         const currentUser = req.body.userId;
         const deletedUser = req.params.id;
         await userService.updateUser(currentUser, deletedUser, req.body);
         res.status(200).json('Account has been updated');
      } catch (error) {
         res.status(403).send({ message: `${error}` });
      }
   }

   async getUser(req: Request, res: Response) {
      try {
         const targetUser = req.params.id;
         const user = await userService.getUser(targetUser);
         res.status(200).json(user);
      } catch (error) {
         res.status(404).send({ message: `${error}` });
      }
   }
}

export default new UserController();
