import express, { Router, Request, Response, NextFunction } from 'express';

const router = Router();

/* router.use((req: Request, res: Response, next: NextFunction) => {
   console.log(req);
   next();
});
 */
//router.ws('/message', (ws, req: Request, next) => console.log('connected'));
/* router.ws('/message', (ws, req: Request, next: NextFunction) => {
   console.log('connect');
});
router.get('asd', () => {
   console.log('asd');
});
 */
export default router;
