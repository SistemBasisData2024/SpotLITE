const Album = require('../schemas/AlbumSchema');

// Function to create a new album
const createAlbum = async (albumData) => {
  try {
    const album = await Album.create(albumData);
    return album;
  } catch (error) {
    throw new Error(`Error while creating album: ${error.message}`);
  }
};

// Function to delete an album by ID
const deleteAlbumById = async (albumId) => {
  try {
    const deletedAlbum = await Album.destroy({ where: { id: albumId } });
    return deletedAlbum;
  } catch (error) {
    throw new Error(`Error while deleting album: ${error.message}`);
  }
};

// Function to update an album by ID
const updateAlbumById = async (albumId, updatedAlbumData) => {
  try {
    const [updatedRowsCount, [updatedAlbum]] = await Album.update(updatedAlbumData, {
      where: { id: albumId },
      returning: true,
    });
    if (updatedRowsCount === 0) {
      throw new Error('Album not found');
    }
    return updatedAlbum;
  } catch (error) {
    throw new Error(`Error while updating album: ${error.message}`);
  }
};

module.exports = {
  createAlbum,
  deleteAlbumById,
  updateAlbumById,
};