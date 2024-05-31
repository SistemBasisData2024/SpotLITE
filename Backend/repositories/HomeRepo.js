const Home = require('../schemas/HomeSchema');

// Function to fetch popular songs data
const getPopularSongs = async () => {
  try {
    const popularSongs = await Home.findAll({ limit: 10 });
    return popularSongs;
  } catch (error) {
    throw new Error(`Error while fetching popular songs: ${error.message}`);
  }
};

module.exports = {
  getPopularSongs,
};