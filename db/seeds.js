const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { db, env } = require('../config/environment');
const User = require('../models/user');

mongoose.connect(db[env]);

User.collection.drop();

User
  .create([{
    username: 'JackD',
    email: 'jack@ga.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://avatars2.githubusercontent.com/u/30760048?s=400&u=3a6840cd76784d7160e02bcd2aefb1f1804a74b4&v=4'
  }, {
    username: 'WillF',
    email: 'will@ga.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://files.slack.com/files-tmb/T0351JZQ0-F9B5N6S1H-4e60b18a85/image_uploaded_from_ios_1024.jpg'
  }, {
    username: 'RaneG',
    email: 'rane@ga.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://avatars1.githubusercontent.com/u/11501555?s=96&v=4'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
