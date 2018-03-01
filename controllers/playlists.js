const Playlist = require('../models/playlists');

function playlistsIndex(req, res, next) {
  Playlist
    .find()
    .exec()
    .then(playlists => res.json(playlists))
    .catch(next);
}


function playlistsCreate(req, res, next) {

  if(req.file) req.body.user = req.currentUser;

  Playlist
    .create(req.body)
    .then(playlists => res.status(201).json(playlists))
    .catch(next);
}

function playlistsShow(req, res, next) {
  Playlist
    .findById(req.params.id)
    .exec()
    .then((playlists) => {
      if(!playlists) return res.notFound();
      res.json(playlists);
    })
    .catch(next);
}

function playlistsDelete(req, res, next) {
  Playlist
    .findById(req.params.id)
    .exec()
    .then((playlists) => {
      if(!playlists) return res.notFound();
      return playlists.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: playlistsIndex,
  create: playlistsCreate,
  show: playlistsShow,
  delete: playlistsDelete
};
