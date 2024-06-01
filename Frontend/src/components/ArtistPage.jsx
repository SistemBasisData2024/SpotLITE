import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ArtistPage.css';

const ArtistPage = () => {
  const [artists, setArtists] = useState([]);
  const [newArtistName, setNewArtistName] = useState('');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('/artists');
        setArtists(response.data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  const handleCreateArtist = async () => {
    try {
      const response = await axios.post('/artists', { name: newArtistName });
      setArtists([...artists, response.data]);
      setNewArtistName('');
    } catch (error) {
      console.error('Error creating artist:', error);
    }
  };

  const handleDeleteArtist = async (id) => {
    try {
      await axios.delete(`/artists/${id}`);
      setArtists(artists.filter(artist => artist._id !== id));
    } catch (error) {
      console.error('Error deleting artist:', error);
    }
  };

  return (
    <div className="artist-container">
      <h1>Artists</h1>
      <div className="artist-form">
        <input
          type="text"
          placeholder="Enter artist name"
          value={newArtistName}
          onChange={(e) => setNewArtistName(e.target.value)}
        />
        <button onClick={handleCreateArtist}>Create Artist</button>
      </div>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <h3>{artist.name}</h3>
            <button onClick={() => handleDeleteArtist(artist._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;