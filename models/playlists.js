const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
  title: { type: String, required: true },
  videoId: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

playlistSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('playlist', playlistSchema);
