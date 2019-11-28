require('dotenv/config');

module.exports = {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
