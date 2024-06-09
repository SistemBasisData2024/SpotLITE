import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicPlayer from './PlayMusic';
import './HomePage.css';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  const handleClosePlayer = () => {
    setSelectedSong(null);
  };

  const handlePreviousSong = () => {
    if (!selectedSong) return;
    const currentIndex = songs.findIndex(song => song.id === selectedSong.id);
    if (currentIndex > 0) {
      setSelectedSong(songs[currentIndex - 1]);
    }
  };

  const handleNextSong = () => {
    if (!selectedSong) return;
    const currentIndex = songs.findIndex(song => song.id === selectedSong.id);
    if (currentIndex < songs.length - 1) {
      setSelectedSong(songs[currentIndex + 1]);
    }
  };

  return (
    <div className="home-page">
      <h2>All Musics</h2>
      <div className="songs-list">
        {songs.map((song) => (
          <div className="song-card" key={song.id} onClick={() => handleSongClick(song)}>
            <img src={song.cover_url} alt={song.title} className="song-image" />
            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist_name}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedSong && (
        <MusicPlayer
          song={selectedSong}
          onClose={handleClosePlayer}
          onPrevious={handlePreviousSong}
          onNext={handleNextSong}
        />
      )}
    </div>
  );
};

export default HomePage;
