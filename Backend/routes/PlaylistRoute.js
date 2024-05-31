const express = require('express');
const router = express.Router();
const playlistRepo = require('../repositories/PlaylistRepo');

// Route to create a new playlist
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newPlaylist = await playlistRepo.createPlaylist({ name });
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a playlist by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlaylist = await playlistRepo.deletePlaylistById(req.params.id);
    if (!deletedPlaylist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    res.json(deletedPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a playlist by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, songs } = req.body;
    const updatedPlaylist = await playlistRepo.updatePlaylistById(req.params.id, { name, songs });
    res.json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;