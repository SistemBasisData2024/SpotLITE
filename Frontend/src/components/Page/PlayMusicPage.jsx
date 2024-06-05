import React from 'react';
import './PlayMusicPage.css';

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <div className="song-info">
        <img src="song_image_url" alt="Song" className="song-image" />
        <div className="song-details">
          <span className="song-title">GMFU - Sped Up</span>
          <span className="song-artist">ODECORE, Sassy Scene, Odetari, 6arelyhuman</span>
        </div>
      </div>
      <div className="controls">
        <button className="control-button">Shuffle</button>
        <button className="control-button">⏮</button>
        <button className="control-button">▶/⏸</button>
        <button className="control-button">⏭</button>
        <button className="control-button">↻</button>
      </div>
      <div className="progress-bar">
        <span>1:11</span>
        <input type="range" min="0" max="100" />
        <span>1:43</span>
      </div>
    </div>
  );
};

export default MusicPlayer;