const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-aged-term-a18aig6f.ap-southeast-1.aws.neon.tech',
  database: 'SpotLITE',
  password: 'HG3i6TZQqDpa',
  port: 5432,
});

module.exports = pool;