const express = require('express');
const { signin, signup, signout } = require('../controllers/auth');

const router = express.Router();

router.post('/signin', signin); //DATA: {login, password}
router.post('/signup', signup); //DATA: {login, password}
router.post('/signout', signout); //HEADER: Authorization: token

module.exports = {
  routes: router,
};
