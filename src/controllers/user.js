const User = require('../models/user');

exports.createUser = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  user.save().then((data) => {
    res.status(201).json(user.sanitise(data));
  });
};
