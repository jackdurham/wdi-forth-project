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

module.exports = {
  show: usersShow,
  addTrack: addTrack
};
