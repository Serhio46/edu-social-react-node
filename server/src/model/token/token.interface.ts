import { Document } from 'mongoose';

export default interface Token extends Document {
   user: string;
   refreshToken: string;
}
