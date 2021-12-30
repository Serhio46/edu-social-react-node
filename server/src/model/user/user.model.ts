import { Schema, model } from 'mongoose';
import UserInterface from 'model/user/user.interface';

const User = new Schema({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   userName: { type: String, unique: true },
   roles: [{ type: String, ref: 'Role' }],
   avatar: { type: String, default: '' },
   courses: [{ type: Object, ref: 'Course' }],
   followers: { type: Array, default: [] },
   followings: { type: Array, default: [] },
   city: { type: String, max: 50 },
});

export default model<UserInterface>('User', User);
