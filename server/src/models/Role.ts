export {};
const { Schema, model } = require('mongoose');

const Role = new Schema({
  value: { type: String, default: 'student', unique: true },
});

module.exports = model('Role', Role);
