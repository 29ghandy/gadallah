import mysql from "mysql2/promise";

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost", // or "mysql" if running in Docker
  user: "root",
  password: "yourpassword",
  database: "yourdbname",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
