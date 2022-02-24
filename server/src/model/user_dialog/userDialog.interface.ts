import { Document } from 'mongoose';

export default interface userDialog extends Document {
   participant: string;
   dialog: string;
}
