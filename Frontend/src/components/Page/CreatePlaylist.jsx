import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Search from './Search';
import './CreatePlaylist.css';

const CreatePlaylistPage = () => {
  const [name, setName] = useState('');
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const isEditing = location.search.includes('edit');
  const playlistId = isEditing ? new URLSearchParams(location.search).get('edit') : null;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/songs');
        setSongs(response.data);
      } catch (err) {
        setError('Error fetching songs');
      }
    };

    const fetchPlaylist = async () => {
      if (playlistId) {
        try {
          const response = await axios.get(`http://localhost:3000/playlists/${playlistId}`);
          const { name, songs } = response.data;
          setName(name);
          setSelectedSongs(songs.map((song) => song.id));
        } catch (err) {
          setError('Error fetching playlist data');
        }
      }
    };

    fetchSongs();
    if (isEditing) {
      fetchPlaylist();
    }
  }, [playlistId, isEditing]);

  const handleSavePlaylist = async () => {
    try {
      const payload = {
        name,
        song_ids: selectedSongs,
      };

      if (isEditing) {
        await axios.put(`http://localhost:3000/playlists/${playlistId}`, payload);
      } else {
        await axios.post('http://localhost:3000/playlists', payload);
      }

      navigate('/playlists');
    } catch (err) {
      setError('Error saving playlist');
      console.error('Error saving playlist:', err.response.data); // Log the error details
    }
  };

  const handleSelectSong = (songId) => {
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(songId)
        ? prevSelected.filter((id) => id !== songId)
        : [...prevSelected, songId]
    );
  };

  // Filter songs based on search term
  const filteredSongs = songs.filter(song =>
    (song.title && song.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (song.artist_name && song.artist_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="create-playlist-page">
      <h2>{isEditing ? 'Edit Playlist' : 'Create Playlist'}</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h3>Select Songs</h3>
      <ul>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <li key={song.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSongs.includes(song.id)}
                  onChange={() => handleSelectSong(song.id)}
                />
                {song.title ? song.title : 'Untitled'} - {song.artist_name ? song.artist_name : 'Uknown artist'}
              </label>
            </li>
          ))
        ) : (
          <p>No songs available</p>
        )}
      </ul>
      <button onClick={handleSavePlaylist}>
        {isEditing ? 'Update Playlist' : 'Create Playlist'}
      </button>
    </div>
  );
};

export default CreatePlaylistPage;