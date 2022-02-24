import { Document } from 'mongoose';

export default interface LastMessage extends Document {
   dialogId: string;
   messageId: string;
   text: string;
}
