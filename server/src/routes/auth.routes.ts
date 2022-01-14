import Router from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = Router();

//logIn
router.post('/login', authController.logIn);

//logOut
router.post('/logout', authController.logOut);

//refresh token
router.get('/refresh', authController.refreshToken);

//make session
router.get('/', authMiddleware, authController.makeSession);

export default router;
