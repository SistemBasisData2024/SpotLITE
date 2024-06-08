const pool = require('../config/db');

// Function to get an artist by ID
const getArtistById = async (artistId) => {
  try {
    const result = await pool.query('SELECT * FROM artists WHERE id = $1', [artistId]);
    if (result.rows.length === 0) {
      throw new Error('Artist not found');
    }
    const artist = result.rows[0];

    // Get artist's albums
    const albums = await pool.query('SELECT * FROM albums WHERE artist_id = $1', [artistId]);
    artist.albums = albums.rows;

    // Get artist's songs
    const songs = await pool.query('SELECT * FROM musics WHERE artist_id = $1', [artistId]);
    artist.songs = songs.rows;

    return artist;
  } catch (error) {
    console.error(`Error fetching artist by ID: ${error.message}`);
    throw new Error(`Error fetching artist: ${error.message}`);
  }
};

// Function to get all artists
const getAllArtists = async () => {
  try {
    const result = await pool.query('SELECT * FROM artists');
    return result.rows;
  } catch (error) {
    console.error(`Error fetching artists: ${error.message}`);
    throw new Error(`Error fetching artists: ${error.message}`);
  }
};

module.exports = {
  getArtistById,
  getAllArtists,
};