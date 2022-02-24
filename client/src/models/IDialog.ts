import { IUser } from 'models/IUser';

export interface IDialog {
   companion: IUser;
   dialogItem: string;
   lastMessage?: lastMess;
}

interface lastMess {
   text: string;
   updatedAt: string;
}
