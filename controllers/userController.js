
const User = require('../models/userModel');

exports.renderIndex = (req, res) => {
  res.render('index');
};

exports.renderSignup = (req, res) => {
  res.render('signup');
};

exports.signup = async (req, res) => {
  const { full_name, email, phone, username, password } = req.body;
  try {
    const newUser = new User({
      full_name,
      email,
      phone,
      username,
      password
    });
    await newUser.save();
    console.log('User added to database');
    res.redirect('/signup');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Internal Server Error');
  }
};
