// linkController.js
const { links } = require('../config/database');
const Link = require('../models/Link');

// Helper function to generate a random string
const generateShortUrl = () => Math.random().toString(36).substring(2, 8);

module.exports = {
  createLink: (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: 'Original URL is required' });
    }
    const id = links.length + 1;
    const shortUrl = generateShortUrl();
    const newLink = new Link({ id, originalUrl, shortUrl });
    links.push(newLink);
    res.status(201).json(newLink);
  },

  getLink: (req, res) => {
    const { id } = req.params;
    const link = links.find(l => l.id == id);
    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json(link);
  },

  getAllLinks: (req, res) => {
    res.json(links);
  },

  redirectLink: (req, res) => {
    const { shortUrl } = req.params;
    const link = links.find(l => l.shortUrl === shortUrl);
    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }
    link.clicks += 1;
    res.redirect(link.originalUrl);
  },
};
