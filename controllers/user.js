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
      // find the track you want to delete inside the tracks array and slice
      // user.tracks.push(req.body.videoId);
      user.tracks = user.tracks.filter(track => track !== req.params.id);
      //{ validateBeforeSave: false }
      return user.save();
    })
    .then(user => {
      return res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: usersShow,
  addTrack: addTrack,
  deleteTrack: deleteTrack
};
