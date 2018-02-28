const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { db, env } = require('../config/environment');


mongoose.connect(db[env]);
