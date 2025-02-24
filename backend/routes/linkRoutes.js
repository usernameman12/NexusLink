// linkRoutes.js
const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
const { verifyToken } = require('../config/auth');

// Route to create a new link (protected)
router.post('/', verifyToken, linkController.createLink);

// Route to get a link by ID
router.get('/:id', verifyToken, linkController.getLink);

// Route to get all links
router.get('/', verifyToken, linkController.getAllLinks);

// Route for redirection by short URL (no auth needed)
router.get('/r/:shortUrl', linkController.redirectLink);

module.exports = router;
