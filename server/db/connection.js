const { Pool } = require('pg');


const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'aman',
  database: 'userimgupload',
});

module.exports = {
  pool
};