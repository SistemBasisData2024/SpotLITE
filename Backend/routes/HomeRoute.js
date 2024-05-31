const express = require('express');
const router = express.Router();
const homeRepo = require('../repositories/homeRepo');

// Route to get popular songs data
router.get('/', async (req, res) => {
  try {
    const popularSongs = await homeRepo.getPopularSongs();
    res.json(popularSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;