import Dialog from '../model/dialog/dialog.model';
import userDialog from '../model/user_dialog/userDialog.model';
import userService from './user.service';
import lastMessagesModel from '../model/lastMessages/lastMessages.model';

class DialogServise {
   async CreateDialog(participants: string[]) {
      const dialogData = new Dialog();
      await dialogData.save();
      const creater = new userDialog({
         participant: participants[0],
         dialog: dialogData._id,
      });
      await creater.save();
      const joiner = new userDialog({
         participant: participants[1],
         dialog: dialogData._id,
      });
      await joiner.save();
      return {
         dialogData,
         creater,
         joiner,
      };
   }

   async getAllCompanions(userId: string) {
      const dialogsData = await userDialog.find({ participant: userId });
      const dialogItems: any = [];

      const getDialogs = async () => {
         return Promise.all(
            dialogsData.map(async (dialogItem) => {
               const AllConversation = await userDialog.find({ dialog: dialogItem.dialog });
               const companions = AllConversation.filter((dialog) => {
                  if (dialog.participant.toString() !== userId) {
                     return dialog;
                  } else {
                     return null;
                  }
               });
               return companions;
            })
         );
      };

      const dialogs = await getDialogs();

      //all dialogs
      const dialogOneLevel = dialogs.flat();
      const dialogsId = dialogOneLevel.map((item) => item.dialog.toString());
      const componionsId = dialogOneLevel.map((item) => item.participant.toString());
      //all companions
      const companionsData = await this.getCompanions(componionsId);

      const messagesData = await this.getLastMessage(dialogsId);

      companionsData.forEach((item, index) => {
         const obj = {
            dialogItem: dialogOneLevel[index].dialog,
            companion: item,
            lastMessage: messagesData.flat()[index],
         };
         dialogItems.push(obj);
      });
      return dialogItems;
   }

   async getCompanions(usersId: string[]) {
      return Promise.all(
         usersId.map(async (id) => {
            const userData = await userService.getUser(id);
            return userData;
         })
      );
   }

   async getLastMessage(dialogsId: string[]) {
      return Promise.all(
         dialogsId.map(async (id) => {
            const lastMessage = await lastMessagesModel.find({ dialogId: id });
            return lastMessage;
         })
      );
   }
}

export default new DialogServise();
