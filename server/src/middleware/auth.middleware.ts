import { Request, Response, NextFunction } from 'express';
import tokenService from '../sevices/token.service';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
   try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
         throw new Error('User not autorized');
      }
      const userData = tokenService.validateAccessToken(token);
      if (!userData) {
         throw new Error('User not autorized');
      }
      req.body.user = userData;
      next();
   } catch (error) {
      throw new Error('User not autorized');
   }
};

export default authMiddleware;
