const Playlist = require('../models/playlists');

function playlistsIndex(req, res) {
  Playlist
    .find()
    .exec()
    .then(playlists => res.json(playlists));
}

module.exports = {
  index: playlistsIndex
};
