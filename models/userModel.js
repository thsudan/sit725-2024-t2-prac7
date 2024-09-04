const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
