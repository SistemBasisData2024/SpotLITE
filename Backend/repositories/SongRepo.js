const pool = require('../config/db');

// Function to create a new song
const createSong = async (songData) => {
  const { title, artistId, albumId, duration } = songData;
  try {
    const result = await pool.query(
      'INSERT INTO songs (title, artist_id, album_id, duration) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, artistId, albumId, duration]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating song: ${error.message}`);
  }
};

// Function to get a song by ID
const getSongById = async (songId) => {
  try {
    const result = await pool.query('SELECT * FROM songs WHERE id = $1', [songId]);
    if (result.rows.length === 0) {
      throw new Error('Song not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching song: ${error.message}`);
  }
};

// Function to get all songs
const getAllSongs = async () => {
  try {
    const result = await pool.query('SELECT * FROM songs');
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching songs: ${error.message}`);
  }
};

// Function to update a song by ID
const updateSongById = async (songId, updatedSongData) => {
  const { title, artistId, albumId, duration } = updatedSongData;
  try {
    const result = await pool.query(
      'UPDATE songs SET title = $1, artist_id = $2, album_id = $3, duration = $4 WHERE id = $5 RETURNING *',
      [title, artistId, albumId, duration, songId]
    );
    if (result.rows.length === 0) {
      throw new Error('Song not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating song: ${error.message}`);
  }
};

// Function to delete a song by ID
const deleteSongById = async (songId) => {
  try {
    const result = await pool.query('DELETE FROM songs WHERE id = $1 RETURNING *', [songId]);
    if (result.rows.length === 0) {
      throw new Error('Song not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error deleting song: ${error.message}`);
  }
};

module.exports = {
  createSong,
  getSongById,
  getAllSongs,
  updateSongById,
  deleteSongById,
};