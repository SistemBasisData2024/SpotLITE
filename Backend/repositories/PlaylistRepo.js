const Playlist = require('../schemas/PlaylistSchema');

// Function to create a new playlist
const createPlaylist = async (playlistData) => {
  try {
    const playlist = new Playlist(playlistData);
    await playlist.save();
    return playlist;
  } catch (error) {
    throw new Error(`Error while creating playlist: ${error.message}`);
  }
};

// Function to delete a playlist by ID
const deletePlaylistById = async (playlistId) => {
  try {
    const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);
    return deletedPlaylist;
  } catch (error) {
    throw new Error(`Error while deleting playlist: ${error.message}`);
  }
};

// Function to update a playlist by ID
const updatePlaylistById = async (playlistId, updatedPlaylistData) => {
  try {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    // Update playlist fields
    playlist.name = updatedPlaylistData.name;
    // If you have other fields to update, add them here

    // Update songs (assuming songs is an array field in PlaylistSchema)
    playlist.songs = updatedPlaylistData.songs;

    await playlist.save();
    return playlist;
  } catch (error) {
    throw new Error(`Error while updating playlist: ${error.message}`);
  }
};

module.exports = {
  createPlaylist,
  deletePlaylistById,
  updatePlaylistById,
};