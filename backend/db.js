
const mysql = require("mysql2");

const db_pass = process.env.DB_PASSWORD;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: db_pass, 
  database: "school_db"
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected!");
});

module.exports = db;
