import Router from 'express';
const router = Router();

import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import dialogRoutes from './dialogs.routes';
import messagesRoute from './messages.route';
import socketRoutes from './socket.routes';

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/dialogs', dialogRoutes);
router.use('/messages', messagesRoute);
router.use('/socket', socketRoutes);

export default router;
