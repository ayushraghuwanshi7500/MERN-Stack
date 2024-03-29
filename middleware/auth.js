const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token
  const token = req.header('x-auth-token');
  // Check if no token.
  if (!token) {
    return res.status(401).json({ msg: 'no token, authorization denied' });
  }

  // Verify token
  //   valid token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    // not valid token
    res.status(401).json({ msg: 'token is not valid' });
  }
};
