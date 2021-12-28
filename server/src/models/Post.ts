export {};
const { Schema, model, ObjectId } = require('mongoose');

const Post = new Schema(
  {
    userId: { type: String, required: true },
    author: String,
    title: { type: String, required: true },
    desc: { type: String, max: 500 },
    image: { type: String },
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
  },
  { timestamps: true },
);

module.exports = model('Posts', Post);
