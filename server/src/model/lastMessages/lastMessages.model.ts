import { Schema, model } from 'mongoose';
import LastMessageIntrafce from './lastMessage.interface';

const LastMessage = new Schema(
   {
      dialogId: { type: Schema.Types.ObjectId, ref: 'Dialog' },
      messageId: { type: Schema.Types.ObjectId, ref: 'Message' },
      text: { type: String },
   },
   { timestamps: true }
);

export default model<LastMessageIntrafce>('LastMessage', LastMessage);
