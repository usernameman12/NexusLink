// auth.js
module.exports = {
    verifyToken: (req, res, next) => {
      const token = req.headers['authorization'];
      if (token === process.env.API_TOKEN) {
        next();
      } else {
        res.status(401).json({ error: 'Unauthorized access' });
      }
    },
  };
  