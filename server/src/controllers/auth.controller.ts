import { Request, Response } from 'express';
import authService from '../sevices/auth.service';

class AuthController {
   async logIn(req: Request, res: Response) {
      const { email, password } = req.body;
      try {
         const userData = await authService.logIn(email, password);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error) {
         res.status(400).send({ message: `${error}` });
      }
   }

   async logOut(req: Request, res: Response) {
      try {
         const { refreshToken } = req.cookies;
         const token = await authService.logOut(refreshToken);
         res.clearCookie('refreshToken');
         res.status(200).json(token);
      } catch (error) {
         res.status(400).send({ message: `${error}` });
      }
   }

   async refreshToken(req: Request, res: Response) {
      try {
         const { refreshToken } = req.cookies;
         const userData = await authService.refreshToken(refreshToken);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error) {
         res.status(400).send({ message: `${error}` });
      }
   }

   async makeSession(req: Request, res: Response) {
      try {
         const userData = await authService.makeSession(req.body.user);
         res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
         res.status(200).json(userData);
      } catch (error) {
         res.status(400).send({ message: `${error}` });
      }
   }
}

export default new AuthController();
