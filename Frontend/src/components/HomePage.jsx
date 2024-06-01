import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [popularSongs, setPopularSongs] = useState([]);

  useEffect(() => {
    const fetchPopularSongs = async () => {
      try {
        const response = await axios.get('/home');
        setPopularSongs(response.data);
      } catch (error) {
        console.error('Error fetching popular songs:', error);
      }
    };

    fetchPopularSongs();
  }, []);

  return (
    <div className="home-page">
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
        <div className="playlist-header">
          <img src="playlist-cover-url.jpg" alt="Playlist Cover" className="playlist-cover" />
          <div className="playlist-info">
            <h1>Lagu Viral Trending</h1>
            <p>Kumpulan lagu viral yang bolak balik muncul di FYP kamu bisa kamu dengerin disini nih! Save playlistnya...</p>
            <div className="playlist-buttons">
              <button className="btn-play">Play</button>
              <button className="btn-follow">Follow</button>
            </div>
          </div>
        </div>
        <div className="song-list">
          {popularSongs.map((song) => (
            <div key={song.id} className="song-card">
              <img src={song.cover_url} alt={song.title} className="song-cover" />
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