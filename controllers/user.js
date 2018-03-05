const User = require('../models/user');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(user => res.json(user))
    .catch(next);
}

function addTrack(req, res, next) {
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      user.tracks.push(req.body.videoId);

      return user.save({ validateBeforeSave: false });
    })
    .then(user => {
      return res.json(user);
    })
    .catch(next);
}

function deleteTrack(req, res, next) {
  console.log('in deleteTrack');
  User
    .findById(req.currentUser)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      user.tracks = user.tracks.filter(track => track !== req.params.id);
      return user.save();
    })
    .then(user => {
      return res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: usersShow,
  index: usersIndex,
  addTrack: addTrack,
  deleteTrack: deleteTrack
};
