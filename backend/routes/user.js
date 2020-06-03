const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const newUser = new User({ firstName, lastName, email });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

// const addUser = new User({
//   firstName: 'Mongoose User',
//   lastName: 'With model&schema',
//   email: 'mon@goose.com',
// });

// addUser.save((err, doc) => {
//   if (err) return console.log(err);
//   console.log(doc._id.getTimestamp());
//   return console.log('User added: \n', doc);
// });
