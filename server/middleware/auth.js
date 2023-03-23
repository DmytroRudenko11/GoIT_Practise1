const users = require('../data/users');

module.exports = function (request, response, next) {
  const token = request.headers.authorization;
  console.log('request headers: ', request.headers);
  console.log('token: ', token);
  const user = users.find((item) => item.token === token);
  console.log('user: ', user);
  if (user) {
    next();
  } else {
    response.status(401).send({ message: 'uncorrect token' });
  }
};
