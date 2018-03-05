const router = require('express').Router();
const auth  = require('../controllers/auth');
const playlists = require('../controllers/playlists');
const users = require('../controllers/user');
const secureRoute = require('../lib/secureRoute');

router.route('/playlists')
  .get(playlists.index)
  .post(secureRoute, playlists.create);

router.route('/playlists/:id')
  .get(playlists.show);

router.route('/users/addTrack')
  .post(secureRoute, users.addTrack);

router.route('/users/deleteTrack/:id')
  .put(secureRoute, users.deleteTrack);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show);

router.route('/users/follow/:id')
  .get(secureRoute, users.follow);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
