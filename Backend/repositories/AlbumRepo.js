const pool = require('../config/db');

// Function to create a new album
const createAlbum = async (albumData) => {
  const { title, artistId, releaseDate } = albumData;
  try {
    const result = await pool.query(
      'INSERT INTO albums (title, artist_id, release_date) VALUES ($1, $2, $3) RETURNING *',
      [title, artistId, releaseDate]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating album: ${error.message}`);
  }
};

// Function to get an album by ID
const getAlbumById = async (albumId) => {
  try {
    const result = await pool.query('SELECT * FROM albums WHERE id = $1', [albumId]);
    if (result.rows.length === 0) {
      throw new Error('Album not found');
    }
    const album = result.rows[0];

    // Get album's songs
    const songs = await pool.query('SELECT * FROM songs WHERE album_id = $1', [albumId]);
    album.songs = songs.rows;

    return album;
  } catch (error) {
    throw new Error(`Error fetching album: ${error.message}`);
  }
};

// Function to get all albums
const getAllAlbums = async () => {
  try {
    const result = await pool.query('SELECT * FROM albums');
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching albums: ${error.message}`);
  }
};

// Function to update an album by ID
const updateAlbumById = async (albumId, updatedAlbumData) => {
  const { title, artistId, releaseDate } = updatedAlbumData;
  try {
    const result = await pool.query(
      'UPDATE albums SET title = $1, artist_id = $2, release_date = $3 WHERE id = $4 RETURNING *',
      [title, artistId, releaseDate, albumId]
    );
    if (result.rows.length === 0) {
      throw new Error('Album not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating album: ${error.message}`);
  }
};

// Function to delete an album by ID
const deleteAlbumById = async (albumId) => {
  try {
    const result = await pool.query('DELETE FROM albums WHERE id = $1 RETURNING *', [albumId]);
    if (result.rows.length === 0) {
      throw new Error('Album not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error deleting album: ${error.message}`);
  }
};

module.exports = {
  createAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbumById,
  deleteAlbumById,
};