const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {

  const hashed = await bcrypt.hash(
    req.body.password,
    10
  );

  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashed
  });

  res.redirect('/login');
};

exports.login = async (req, res) => {

  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return res.send('User not found');
  }

  const valid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!valid) {
    return res.send('Wrong Password');
  }

  req.session.user = user;

  res.redirect('/dashboard');
};
