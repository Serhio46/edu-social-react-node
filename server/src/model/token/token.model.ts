import { Schema, model } from 'mongoose';
import TokenInterface from 'model/token/token.interface';

const Token = new Schema({
   user: { type: Schema.Types.ObjectId, ref: 'User' },
   refreshToken: { type: String, required: true },
});

export default model<TokenInterface>('Token', Token);
