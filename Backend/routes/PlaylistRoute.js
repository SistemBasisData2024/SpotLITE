const express = require('express');
const router = express.Router();
const playlistRepo = require('../repositories/PlaylistRepo');

// Route to create a new playlist
router.post('/', async (req, res) => {
  try {
    const newPlaylist = await playlistRepo.createPlaylist(req.body);
    res.status(201).json(newPlaylist);
  } catch (error) {
    console.error(`Error creating playlist: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

// Route to get a playlist by ID including songs and creator's name (no login required)
router.get('/:id', async (req, res) => {
  try {
    const playlist = await playlistRepo.getPlaylistById(req.params.id);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all playlists (no login required)
router.get('/', async (req, res) => {
  try {
    const playlists = await playlistRepo.getAllPlaylists();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a playlist by ID (requires login)
router.put('/:id', async (req, res) => {
  try {
    const updatedPlaylist = await playlistRepo.updatePlaylistById(req.params.id, req.body);
    res.json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a playlist by ID (requires login)
router.delete('/:id', async (req, res) => {
  try {
    const deletePlaylistById = await playlistRepo.deletePlaylistById(req.params.id);
    res.json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;