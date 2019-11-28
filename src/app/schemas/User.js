import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

User.post('save', async (user, next) => {
  if (user.password) {
    const password2 = user.password;
    user.password = await bcrypt.hash(password2, 8);
    await user.update(user);
  }
  next();
});

module.exports = mongoose.model('User', User);
