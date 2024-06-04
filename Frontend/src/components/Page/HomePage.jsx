import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPopularSongsAndArtists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/home');
        setSongs(response.data);
      } catch (err) {
        setError('Error fetching popular songs and artists');
      }
    };

    fetchPopularSongsAndArtists();
  }, []);

  return (
    <div className="homepage-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <i className="fas fa-home"></i>
          </div>
          <div className="sidebar-search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="sidebar-library">
          <h2>Your Library</h2>
          <ul className="library-items">
            <li className="library-item">
              <i className="fas fa-heart"></i>
              <span>Liked Songs</span>
            </li>
            {/* Add more items here */}
          </ul>
        </div>
      </aside>
      <main className="main-content">
        <h2>FYP Lagu Viral</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="song-list">
          {songs.map((song) => (
            <div key={song.id} className="song-card">
              <img src={song.cover_image} alt={song.title} className="song-cover" />
              <div className="song-details">
                <h3>{song.title}</h3>
                <p>{song.artist_name}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;