import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlaylistPage.css';

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('/playlists');
        setPlaylists(response.data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  const handleCreatePlaylist = async () => {
    try {
      const response = await axios.post('/playlists', { name: newPlaylistName });
      setPlaylists([...playlists, response.data]);
      setNewPlaylistName('');
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  const handleDeletePlaylist = async (id) => {
    try {
      await axios.delete(`/playlists/${id}`);
      setPlaylists(playlists.filter(playlist => playlist._id !== id));
    } catch (error) {
      console.error('Error deleting playlist:', error);
    }
  };

  return (
    <div className="playlist-container">
      <h1>Playlists</h1>
      <div className="playlist-form">
        <input
          type="text"
          placeholder="Enter playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
      </div>
      <div className="playlist-list">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <h3>{playlist.name}</h3>
            <button onClick={() => handleDeletePlaylist(playlist._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;