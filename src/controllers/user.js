const User = require('../models/user');

exports.post = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  user.save((error, userCreated) => {
    if (error) return `something went wrong submitting to the DB: ${error}`;
    res.json(userCreated);
  })
}