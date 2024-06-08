const express = require('express');
const router = express.Router();
const playlistRepo = require('../repositories/PlaylistRepo');

// Middleware to ensure the user is logged in
const ensureLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'You must be logged in to access this resource' });
  }
  next();
};

// Route to create a new playlist
router.post('/', ensureLoggedIn, async (req, res) => {
  try {
    const newPlaylist = await playlistRepo.createPlaylist({ ...req.body, createdBy: req.user.id });
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a playlist by ID including songs and creator's name
router.get('/:id', ensureLoggedIn, async (req, res) => {
  try {
    const playlist = await playlistRepo.getPlaylistById(req.params.id);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all playlists created by the logged-in user
router.get('/', ensureLoggedIn, async (req, res) => {
  try {
    const playlists = await playlistRepo.getAllPlaylistsByUser(req.user.id);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a playlist by ID
router.put('/:id', ensureLoggedIn, async (req, res) => {
  try {
    const updatedPlaylist = await playlistRepo.updatePlaylistById(req.params.id, req.body);
    res.json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a playlist by ID
router.delete('/:id', ensureLoggedIn, async (req, res) => {
  try {
    const deletedPlaylist = await playlistRepo.deletePlaylistById(req.params.id);
    res.json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;