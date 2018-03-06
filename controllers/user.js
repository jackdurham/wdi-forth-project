const User = require('../models/user');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('followers following')
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
    .populate('following followers')
    .exec()
    .then(user => res.json(user))
    .catch(next);
}

function followRoute(req, res, next) {
  const followerId = req.params.id;
  const currentUserId = req.currentUser.id;

  console.log(followerId, currentUserId);

  User
    .findById(currentUserId)
    .exec()
    .then(user => {
      user.following.push(followerId);
      user.save();

      return User.findById(followerId).populate('followers').exec();
    })
    .then(user => {
      user.followers.push(currentUserId);
      user.save();
      return res.status(200).json(user);
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
  follow: followRoute,
  addTrack: addTrack,
  deleteTrack: deleteTrack
};
