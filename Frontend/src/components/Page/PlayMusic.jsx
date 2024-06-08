import React, { useState, useRef, useEffect } from 'react';
import './PlayMusic.css';

const MusicPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(event.target.value);
  };

  if (!song) {
    return null;
  }

  return (
    <div className="music-player">
      <div className="song-info">
        <img src={song.cover_url} alt={song.title} className="song-image" />
        <div className="song-details">
          <span className="song-title">{song.title}</span>
          <span className="song-artist">{song.artist_name}</span>
        </div>
      </div>
      <div className="controls">
        <button className="control-button">⏮</button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className="control-button">⏭</button>
      </div>
      <div className="progress-bar">
        <span>{audioRef.current && audioRef.current.currentTime ? audioRef.current.currentTime.toFixed(2) : '0:00'}</span>
        <input type="range" min="0" max="100" value={progress} onChange={handleSeek} />
        <span>{audioRef.current && audioRef.current.duration ? audioRef.current.duration.toFixed(2) : '0:00'}</span>
      </div>
      <audio ref={audioRef} src={song.music_url}></audio>
    </div>
  );
};

export default MusicPlayer;