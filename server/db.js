var mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  port: 3307,
  database: 'react_blog'
});

module.exports = {
    connectionPool: pool
}