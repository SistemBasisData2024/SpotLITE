const express = require('express');
const router = express.Router();
const artistRepo = require('../repositories/ArtistRepo');

// Route to get all artists
router.get('/', async (req, res) => {
  try {
    const artists = await artistRepo.getAllArtists();
    res.json(artists);
  } catch (error) {
    console.error(`Error in /artists route: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

// Route to get an artist by ID
router.get('/:id', async (req, res) => {
  try {
    const artistId = parseInt(req.params.id, 10);
    const artist = await artistRepo.getArtistById(artistId);
    res.json(artist);
  } catch (error) {
    console.error(`Error in /artists/:id route: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;