import { Schema, model } from 'mongoose';

interface Role { }

const Role = new Schema({
	value: { type: String, default: 'student', unique: true },
})

module.exports = model('Role', Role);