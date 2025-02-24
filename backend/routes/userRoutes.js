// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../config/auth');

// Route to create a new user (for testing, no auth required)
router.post('/', userController.createUser);

// Route to get all users (protected)
router.get('/', verifyToken, userController.getAllUsers);

// Route to get a user by ID (protected)
router.get('/:id', verifyToken, userController.getUser);

module.exports = router;
