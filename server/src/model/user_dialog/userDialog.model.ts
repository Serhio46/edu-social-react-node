import { Schema, model } from 'mongoose';
import userDialogInterface from 'model/user_dialog/userDialog.interface';

const UserDialog = new Schema(
   {
      participant: { type: Schema.Types.ObjectId, ref: 'User' },
      dialog: { type: Schema.Types.ObjectId, ref: 'Dialog' },
   },
   { timestamps: true }
);

export default model<userDialogInterface>('userDialog', UserDialog);
