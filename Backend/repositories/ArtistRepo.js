const pool = require('../config/db');

// Function to create a new artist
const createArtist = async (artistData) => {
  const { name, bio } = artistData;
  try {
    const result = await pool.query(
      'INSERT INTO artists (name, bio) VALUES ($1, $2) RETURNING *',
      [name, bio]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating artist: ${error.message}`);
  }
};

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
    const songs = await pool.query('SELECT * FROM songs WHERE artist_id = $1', [artistId]);
    artist.songs = songs.rows;

    return artist;
  } catch (error) {
    throw new Error(`Error fetching artist: ${error.message}`);
  }
};

// Function to get all artists
const getAllArtists = async () => {
  try {
    const result = await pool.query('SELECT * FROM artists');
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching artists: ${error.message}`);
  }
};

// Function to update an artist by ID
const updateArtistById = async (artistId, updatedArtistData) => {
  const { name, bio } = updatedArtistData;
  try {
    const result = await pool.query(
      'UPDATE artists SET name = $1, bio = $2 WHERE id = $3 RETURNING *',
      [name, bio, artistId]
    );
    if (result.rows.length === 0) {
      throw new Error('Artist not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating artist: ${error.message}`);
  }
};

// Function to delete an artist by ID
const deleteArtistById = async (artistId) => {
  try {
    const result = await pool.query('DELETE FROM artists WHERE id = $1 RETURNING *', [artistId]);
    if (result.rows.length === 0) {
      throw new Error('Artist not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error deleting artist: ${error.message}`);
  }
};

module.exports = {
  createArtist,
  getArtistById,
  getAllArtists,
  updateArtistById,
  deleteArtistById,
};