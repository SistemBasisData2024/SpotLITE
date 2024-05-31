const Artist = require('../schemas/ArtistSchema');

// Function to create a new artist
const createArtist = async (artistData) => {
  try {
    const artist = await Artist.create(artistData);
    return artist;
  } catch (error) {
    throw new Error(`Error while creating artist: ${error.message}`);
  }
};

// Function to delete an artist by ID
const deleteArtistById = async (artistId) => {
  try {
    const deletedArtist = await Artist.destroy({ where: { id: artistId } });
    return deletedArtist;
  } catch (error) {
    throw new Error(`Error while deleting artist: ${error.message}`);
  }
};

// Function to update an artist by ID
const updateArtistById = async (artistId, updatedArtistData) => {
  try {
    const [updatedRowsCount, [updatedArtist]] = await Artist.update(updatedArtistData, {
      where: { id: artistId },
      returning: true,
    });
    if (updatedRowsCount === 0) {
      throw new Error('Artist not found');
    }
    return updatedArtist;
  } catch (error) {
    throw new Error(`Error while updating artist: ${error.message}`);
  }
};

module.exports = {
  createArtist,
  deleteArtistById,
  updateArtistById,
};