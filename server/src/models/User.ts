export {};
const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userName: { type: String, unique: true },
  roles: [{ type: String, ref: 'Role' }],
  avatar: { type: String, default: '' },
  courses: [{ type: ObjectId, ref: 'Course' }],
  followers: { type: Array, default: [] },
  followings: { type: Array, default: [] },
  city: { type: String, max: 50 },
});

module.exports = model('user', User);
