import { Document } from 'mongoose';

export default interface User extends Document {
   email: string;
   password: string;
   userName?: string;
   roles?: string[];
   avatar?: string;
   courses?: Object[];
   followers?: [];
   followings?: [];
   city?: string;
}
