// userController.js
const { users } = require('../config/database');
const User = require('../models/User');

module.exports = {
  createUser: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const id = users.length + 1;
    const newUser = new User({ id, username, password });
    users.push(newUser);
    res.status(201).json(newUser);
  },

  getAllUsers: (req, res) => {
    res.json(users);
  },

  getUser: (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id == id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  },
};
