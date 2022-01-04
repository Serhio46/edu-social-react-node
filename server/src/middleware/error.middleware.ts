import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void => {
   console.log(err);
   if (err instanceof ApiError) {
      res.status(err.status).json({ message: err.message, errors: err.errors });
   }
   res.status(500).json({ message: 'Something went wrong!' });
};

export default errorMiddleware;
