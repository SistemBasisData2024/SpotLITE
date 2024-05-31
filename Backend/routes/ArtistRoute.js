const express = require('express');
const router = express.Router();
const artistRepo = require('../repositories/ArtistRepo');

// Route to create a new artist
router.post('/', async (req, res) => {
  try {
    const newArtist = await artistRepo.createArtist(req.body);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete an artist by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRowsCount = await artistRepo.deleteArtistById(req.params.id);
    if (deletedRowsCount === 0) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update an artist by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedArtist = await artistRepo.updateArtistById(req.params.id, req.body);
    res.json(updatedArtist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;