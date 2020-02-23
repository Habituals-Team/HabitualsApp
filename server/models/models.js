const { Pool } = require('pg');
const PG_URI = 'postgres://pzqgzgfo:R9VntxM7h0qhymK6qbIDLSmYfd9YOBgh@rajje.db.elephantsql.com:5432/pzqgzgfo';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};