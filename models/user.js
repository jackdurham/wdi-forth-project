const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'Please add a username' },
  email: { type: String, required: 'Please provide your email' },
  password: { type: String, required: 'Please choose a password' },
  image: {type: String, required: 'Please add an image of yourself'},
  tracks: { type: Array },
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true}]
});

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

userSchema.virtual('followers', {
  ref: 'User',
  localField: '_id',
  foreignField: 'following'
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && (!this._passwordConfirmation || this._passwordConfirmation !== this.password)) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function valiatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
