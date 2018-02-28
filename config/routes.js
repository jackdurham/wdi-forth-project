const router = require('express').Router();
const auth  = require('../controllers/auth');
const playlists = require('../controllers/playlists');
const users = require('../controllers/user');

router.route('/playlists')
  .get(playlists.index);

router.route('/users/:id')
  .get(users.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
