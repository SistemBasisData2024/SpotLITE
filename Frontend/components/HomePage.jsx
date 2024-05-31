import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [popularSongs, setPopularSongs] = useState([]);

  useEffect(() => {
    const fetchPopularSongs = async () => {
      try {
        const response = await axios.get('/home'); // Assuming backend is served at '/home' route
        setPopularSongs(response.data);
      } catch (error) {
        console.error('Error fetching popular songs:', error);
      }
    };

    fetchPopularSongs();
  }, []);

  return (
    <div className="home-container">
      <h1>Popular Songs</h1>
      <div className="popular-songs">
        {popularSongs.map((song, index) => (
          <div key={index} className="song-card">
            <h3>{song.title}</h3>
            <p>{song.artist} - {song.album}</p>
            {/* Add more song details here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;