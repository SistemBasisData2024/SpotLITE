const express = require('express');
const router = express.Router();
const homeRepo = require('../repositories/SongRepo');

router.get('/', async (req, res) => {
  try {
    console.log('Fetching songs and artists from repository');
    const popularSongsAndArtists = await homeRepo.getAllSongs();
    console.log('Songs and artists fetched successfully:', popularSongsAndArtists);
    res.json(popularSongsAndArtists);
  } catch (error) {
    console.error(`Error in route: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;