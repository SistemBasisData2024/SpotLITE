import React, { useState, useRef } from 'react';
import './PlayMusicPage.css';

const PlayMusicPage = () => {
  const [currentSong, setCurrentSong] = useState({
    title: 'Example Song',
    artist: 'Example Artist',
    albumCover: 'https://via.placeholder.com/150', // Placeholder image URL
    audioUrl: 'path_to_your_audio_file.mp3' // Replace with the actual audio file path
  });
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="play-music-container">
      <div className="music-info">
        <img src={currentSong.albumCover} alt="Album Cover" className="album-cover" />
        <div className="song-details">
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <audio ref={audioRef} src={currentSong.audioUrl} />
    </div>
  );
};

export default PlayMusicPage;