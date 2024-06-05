import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreatePlaylist.css';

const CreatePlaylistPage = () => {
  const [name, setName] = useState('');
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('/api/songs');
        setSongs(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('Error fetching songs:', err);
        setError('Error fetching songs');
        setSongs([]); // Ensure songs is always an array
      }
    };

    fetchSongs();
  }, []);

  const handleCreatePlaylist = async () => {
    try {
      await axios.post('/api/playlists', {
        name,
        songs: selectedSongs,
      });
      alert('Playlist created successfully!');
    } catch (err) {
      console.error('Error creating playlist:', err);
      setError('Error creating playlist');
    }
  };

  const handleSelectSong = (songId) => {
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(songId)
        ? prevSelected.filter((id) => id !== songId)
        : [...prevSelected, songId]
    );
  };

  return (
    <div className="create-playlist-page">
      <h2>Create Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
      <h3>Select Songs</h3>
      <ul>
        {songs.length > 0 ? (
          songs.map((song) => (
            <li key={song.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSongs.includes(song.id)}
                  onChange={() => handleSelectSong(song.id)}
                />
                {song.title} - {song.artist}
              </label>
            </li>
          ))
        ) : (
          <p>No songs available</p>
        )}
      </ul>
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
    </div>
  );
};

export default CreatePlaylistPage;
