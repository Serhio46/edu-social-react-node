import { Document } from 'mongoose';

export default interface Message extends Document {
   sender: string;
   dialog: string;
   text: string;
}
