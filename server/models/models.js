const { Pool } = require('pg');
const PG_URI = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@rajje.db.elephantsql.com:5432/${process.env.DB_NAME}`;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};