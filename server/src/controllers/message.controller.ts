import { Request, Response, NextFunction } from 'express';
import MessageService from '../sevices/message.service';
import MessageInterface from '../model/message/message.interface';
import LastMessageInterface from '@model/lastMessages/lastMessage.interface';

class MessageController {
   async createMessage(req: Request, res: Response, next: NextFunction) {
      try {
         const body: MessageInterface = req.body;
         const message = await MessageService.createMessage(body);

         const lastMessageData = {
            dialogId: body.dialog,
            messageId: message._id,
            text: message.text,
         };
         const lastMessage: any = await MessageService.updateLastMessage(lastMessageData);
         res.status(200).json(message);
      } catch (error) {
         next(error);
      }
   }

   async getAllMessages(req: Request, res: Response, next: NextFunction) {
      try {
         const { dialogId } = req.params;
         const allMesages = await MessageService.getAllMessages(dialogId);
         res.status(200).json(allMesages);
      } catch (error) {
         next(error);
      }
   }
}

export default new MessageController();
