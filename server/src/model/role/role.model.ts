import { Schema, model } from 'mongoose';
import RoleInterface from 'model/role/role.interface';

const Role = new Schema({
   value: { type: String, default: 'student', unique: true },
});

export default model<RoleInterface>('Role', Role);
