const pool = require('../config/db');

// Function to create a new playlist
const createPlaylist = async (playlistData) => {
  const { user_id, name, description, song_ids } = playlistData;
  try {
    const client = await pool.connect();
    await client.query('BEGIN');

    const playlistResult = await client.query(
      'INSERT INTO playlists (user_id, name, description) VALUES ($1, $2, $3) RETURNING *',
      [user_id, name, description]
    );
    const playlist = playlistResult.rows[0];

    if (song_ids && song_ids.length > 0) {
      for (const song_id of song_ids) {
        await client.query(
          'INSERT INTO playlist_songs (playlist_id, song_id) VALUES ($1, $2)',
          [playlist.id, song_id]
        );
      }
    }

    await client.query('COMMIT');
    return playlist;
  } catch (error) {
    await client.query('ROLLBACK');
    throw new Error(`Error creating playlist: ${error.message}`);
  } finally {
    client.release();
  }
};

// Function to get a playlist by ID
const getPlaylistById = async (playlistId) => {
  try {
    const playlistResult = await pool.query(
      'SELECT playlists.*, users.username as owner FROM playlists LEFT JOIN users ON playlists.user_id = users.id WHERE playlists.id = $1',
      [playlistId]
    );

    if (playlistResult.rows.length === 0) {
      throw new Error('Playlist not found');
    }

    const playlist = playlistResult.rows[0];

    const songsResult = await pool.query(
      `SELECT musics.*
       FROM musics
       JOIN playlist_songs ON musics.id = playlist_songs.song_id
       WHERE playlist_songs.playlist_id = $1`,
      [playlistId]
    );

    playlist.songs = songsResult.rows;
    return playlist;
  } catch (error) {
    throw new Error(`Error fetching playlist: ${error.message}`);
  }
};

// Function to get all playlists for a user
const getAllPlaylists = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM playlists WHERE user_id = $1', [userId]);
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching playlists: ${error.message}`);
  }
};

// Function to update a playlist by ID
const updatePlaylistById = async (playlistId, updatedPlaylistData) => {
  const { name, description, songs } = updatedPlaylistData;
  try {
    const result = await pool.query(
      'UPDATE playlists SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, playlistId]
    );

    await pool.query('DELETE FROM playlist_songs WHERE playlist_id = $1', [playlistId]);
    const songInsertPromises = songs.map(songId => {
      return pool.query('INSERT INTO playlist_songs (playlist_id, song_id) VALUES ($1, $2)', [playlistId, songId]);
    });
    await Promise.all(songInsertPromises);

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