const pool = require('../config/db');

const getPopularSongsAndArtists = async () => {
  try {
    console.log('Executing query to fetch popular songs and artists');
    const result = await pool.query(`
      SELECT musics.*, artists.name as artist_name
      FROM musics
      JOIN artists ON musics.artist_id = artists.id
      ORDER BY musics.popularity DESC
      LIMIT 10
    `);
    console.log('Query executed successfully, result:', result.rows);
    return result.rows;
  } catch (error) {
    console.error(`Error executing query: ${error.message}`);
    throw new Error(`Error fetching popular songs and artists: ${error.message}`);
  }
};

module.exports = {
  getPopularSongsAndArtists
};