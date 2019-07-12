const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

userSchema.pre('save', function encryptPassword(next) {
  if (!this.isModified('password')) {
    next();
  } else {
    bcrypt.hash(this.password, 10, (error, hash) => {
      if (error) {
        next(error);
      } else {
        this.password = hash;
        return next();
      }
    });
  }
});

userSchema.methods.sanitise = function sanitise() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
