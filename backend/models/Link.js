// Link.js
class Link {
    constructor({ id, originalUrl, shortUrl, clicks = 0 }) {
      this.id = id;
      this.originalUrl = originalUrl;
      this.shortUrl = shortUrl;
      this.clicks = clicks;
    }
  }
  
  module.exports = Link;
  