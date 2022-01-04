import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import userService from '../sevices/user.service';
import ApiError from '../exceptions/api-error';

class UserController {
   async registration(req: Request, res: Response, next: NextFunction) {
      try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Validation error', errors.array()));
         }
         const { email, password, roles, userName } = req.body;
         const userData = await userService.registartion(email, password, roles, userName);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error: any) {
         next(error);
      }
   }

   async deleteUser(req: Request, res: Response, next: NextFunction) {
      try {
         const currentUser = req.body.userId;
         const deletedUser = req.params.id;
         await userService.deleteUser(currentUser, deletedUser);
         res.status(200).json('Account has been deleted');
      } catch (error: any) {
         next(error);
      }
   }

   async updateUser(req: Request, res: Response, next: NextFunction) {
      try {
         const currentUser = req.body.userId;
         const deletedUser = req.params.id;
         await userService.updateUser(currentUser, deletedUser, req.body);
         res.status(200).json('Account has been updated');
      } catch (error: any) {
         next(error);
      }
   }

   async getUser(req: Request, res: Response, next: NextFunction) {
      try {
         const targetUser = req.params.id;
         const user = await userService.getUser(targetUser);
         res.status(200).json(user);
      } catch (error: any) {
         next(error);
      }
   }
}

export default new UserController();
