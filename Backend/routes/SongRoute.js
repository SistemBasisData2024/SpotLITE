const express = require('express');
const router = express.Router();
const songRepo = require('../repositories/SongRepo');

// Route to create a new song
router.post('/', async (req, res) => {
  try {
    const newSong = await songRepo.createSong(req.body);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a song by ID
router.get('/:id', async (req, res) => {
  try {
    const song = await songRepo.getSongById(req.params.id);
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await songRepo.getAllSongs();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a song by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRowsCount = await songRepo.deleteSongById(req.params.id);
    if (deletedRowsCount === 0) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a song by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSong = await songRepo.updateSongById(req.params.id, req.body);
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;