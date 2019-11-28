const User = require('../schemas/User');

module.exports = async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized user' });
  }

  return next();
};
