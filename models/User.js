const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true, enum: ['ADMIN', 'USER'] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
