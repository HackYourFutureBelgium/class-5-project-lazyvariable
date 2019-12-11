const jwt = require('jsonwebtoken');

require('dotenv').config();

// aim is to get the token from frontend
function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

//when we need private routh we use this middleware as parameter in the end point
module.exports = auth;
