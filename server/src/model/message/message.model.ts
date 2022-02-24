import { Schema, model } from 'mongoose';
import MessageInterface from './message.interface';

const Message = new Schema(
   {
      sander: { type: Schema.Types.ObjectId, ref: 'User' },
      dialog: { type: Schema.Types.ObjectId, ref: 'Dialog' },
      text: { type: String },
   },
   { timestamps: true }
);

export default model<MessageInterface>('Message', Message);
