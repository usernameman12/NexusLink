// sampleData.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/db.sqlite');

db.serialize(() => {
  // Insert sample links
  db.run(`INSERT INTO links (originalUrl, shortUrl, clicks) VALUES (?, ?, ?)`, [
    'https://example.com',
    'exmpl1',
    10
  ]);

  db.run(`INSERT INTO links (originalUrl, shortUrl, clicks) VALUES (?, ?, ?)`, [
    'https://openai.com',
    'openai',
    25
  ]);

  // Insert sample users
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [
    'john_doe',
    'password123'
  ]);

  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [
    'jane_doe',
    'securepass456'
  ]);

  console.log('Sample data has been inserted.');
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});
