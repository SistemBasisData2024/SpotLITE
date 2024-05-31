const Song = require('../schemas/SongSchema');

// Function to create a new song
const createSong = async (songData) => {
  try {
    const song = await Song.create(songData);
    return song;
  } catch (error) {
    throw new Error(`Error while creating song: ${error.message}`);
  }
};

// Function to get a song by ID
const getSongById = async (songId) => {
  try {
    const song = await Song.findByPk(songId);
    if (!song) {
      throw new Error('Song not found');
    }
    return song;
  } catch (error) {
    throw new Error(`Error while fetching song: ${error.message}`);
  }
};

// Function to get all songs
const getAllSongs = async () => {
  try {
    const songs = await Song.findAll();
    return songs;
  } catch (error) {
    throw new Error(`Error while fetching songs: ${error.message}`);
  }
};

// Function to delete a song by ID
const deleteSongById = async (songId) => {
  try {
    const deletedSong = await Song.destroy({ where: { id: songId } });
    return deletedSong;
  } catch (error) {
    throw new Error(`Error while deleting song: ${error.message}`);
  }
};

// Function to update a song by ID
const updateSongById = async (songId, updatedSongData) => {
  try {
    const [updatedRowsCount, [updatedSong]] = await Song.update(updatedSongData, {
      where: { id: songId },
      returning: true,
    });
    if (updatedRowsCount === 0) {
      throw new Error('Song not found');
    }
    return updatedSong;
  } catch (error) {
    throw new Error(`Error while updating song: ${error.message}`);
  }
};

module.exports = {
  createSong,
  getSongById,
  getAllSongs,
  deleteSongById,
  updateSongById,
};