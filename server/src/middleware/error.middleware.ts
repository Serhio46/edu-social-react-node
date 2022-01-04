import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error';

const errrorMidleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
   console.log(err);
   if (err instanceof ApiError) {
      return res.status(err.status).json({ message: err.message, errors: err.errors });
   }
   return res.status(500).json({ message: 'Something went wrong!' });
};

export default errrorMidleware;
