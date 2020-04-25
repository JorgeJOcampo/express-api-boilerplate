const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    role: { type: String, required: true, enum: ['ADMIN', 'USER'] }
  },
  // { timestamps: true }
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('User', UserSchema);
