const sqlite3 = require("sqlite3").verbose();

// 🔹 Persistent SQLite Database (Saves Data in File)
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.error("❌ Database Connection Failed:", err.message);
    } else {
        console.log("✅ Connected to SQLite Database.");
    }
});

// 🔹 Ensure Table Exists
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )`);

    db.run(`
      CREATE TABLE IF NOT EXISTS data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          query TEXT,
          response TEXT
      )
  `);
});

module.exports = db;
