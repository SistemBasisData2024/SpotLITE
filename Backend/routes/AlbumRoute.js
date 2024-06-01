const express = require('express');
const router = express.Router();
const albumRepo = require('../repositories/AlbumRepo');

// Route to create a new album
router.post('/', async (req, res) => {
  try {
    const newAlbum = await albumRepo.createAlbum(req.body);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get an album by ID
router.get('/:id', async (req, res) => {
  try {
    const album = await albumRepo.getAlbumById(req.params.id);
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all albums
router.get('/', async (req, res) => {
  try {
    const albums = await albumRepo.getAllAlbums();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update an album by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAlbum = await albumRepo.updateAlbumById(req.params.id, req.body);
    res.json(updatedAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete an album by ID
router.delete('/:id', async (req, res) => {
  try {
    await albumRepo.deleteAlbumById(req.params.id);
    res.json({ message: 'Album deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;