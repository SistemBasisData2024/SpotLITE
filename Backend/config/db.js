const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-aged-term-a18aig6f.ap-southeast-1.aws.neon.tech',
  database: 'SpotLITE',
  password: 'N3wP%40ssw0rd%212024',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;