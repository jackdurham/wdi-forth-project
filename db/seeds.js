// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const { db, env } = require('../config/environment');
// const User = require('../models/user');
//
// mongoose.connect(db[env]);
//
// User.collection.drop();
//
// User
//   .create([{
//     username: 'WFloissac',
//     email: 'will@ga.com',
//     password: 'password',
//     passwordConfirmation: 'password'
//   }]
//     .then(users => {
//       console.log(`${users.length} users were created`);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       mongoose.connection.close();
//     }));
