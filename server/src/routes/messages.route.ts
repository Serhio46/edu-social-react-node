import { Router } from 'express';
import MessageController from '../controllers/message.controller';
const router = Router();

//create message
router.post('/', MessageController.createMessage);

//get allMessages of dialog
router.get('/:dialogId', MessageController.getAllMessages);

//update message

//delete message

export default router;
