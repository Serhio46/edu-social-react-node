import MessageModel from '../model/message/message.model';
import MessageInterface from '../model/message/message.interface';
import LastMessage from '../model/lastMessages/lastMessages.model';
import LastMessageInterface from '../model/lastMessages/lastMessage.interface';

class MessageService {
   async createMessage(mesageData: MessageInterface) {
      const newMessage = new MessageModel(mesageData);
      const savedMessage = newMessage.save();
      return savedMessage;
   }

   async updateLastMessage(messageData: any) {
      const findMessage = await LastMessage.findOneAndUpdate(
         { dialogId: messageData.dialogId },
         { messageId: messageData.messageId, text: messageData.text }
      );
      if (findMessage) {
         return;
      }
      await LastMessage.create(messageData);
   }

   async getAllMessages(dialogId: string) {
      const messages = await MessageModel.find({ dialog: dialogId });
      return messages;
   }
}

export default new MessageService();
