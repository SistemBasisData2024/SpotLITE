// PlaylistRepo.js

const pool = require('../config/db');

// Function to create a new playlist
const createPlaylist = async (playlistData) => {
  const { name, description } = playlistData;
  try {
    const result = await pool.query(
      'INSERT INTO playlists (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating playlist: ${error.message}`);
  }
};

// Function to get a playlist by ID
const getPlaylistById = async (playlistId) => {
  try {
    const result = await pool.query('SELECT * FROM playlists WHERE id = $1', [playlistId]);
    if (result.rows.length === 0) {
      throw new Error('Playlist not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching playlist: ${error.message}`);
  }
};

// Function to get all playlists
const getAllPlaylists = async () => {
  try {
    const result = await pool.query('SELECT * FROM playlists');
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching playlists: ${error.message}`);
  }
};

// Function to update a playlist by ID
const updatePlaylistById = async (playlistId, updatedPlaylistData) => {
  const { name, description } = updatedPlaylistData;
  try {
    const result = await pool.query(
      'UPDATE playlists SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, playlistId]
    );
    if (result.rows.length === 0) {
      throw new Error('Playlist not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating playlist: ${error.message}`);
  }
};

// Function to delete a playlist by ID
const deletePlaylistById = async (playlistId) => {
  try {
    const result = await pool.query('DELETE FROM playlists WHERE id = $1 RETURNING *', [playlistId]);
    if (result.rows.length === 0) {
      throw new Error('Playlist not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error deleting playlist: ${error.message}`);
  }
};

module.exports = {
  createPlaylist,
  getPlaylistById,
  getAllPlaylists,
  updatePlaylistById,
  deletePlaylistById,
};