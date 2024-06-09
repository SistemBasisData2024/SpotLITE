import React from 'react';
import './PlayMusic.css';

const MusicPlayer = ({ song, onClose, onPrevious, onNext }) => {
  if (!song) {
    return null;
  }

  const soundCloudUrl = `https://w.soundcloud.com/player/?url=${song.music_url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <div className="music-player">
      <button className="close-button" onClick={onClose}>Close</button>
      <iframe
        width="30%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={soundCloudUrl}
      ></iframe>
      <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100' }}>
        <a href={song.artist_url} title={song.artist_name} target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>
          {song.artist_name}
        </a> · 
        <a href={song.music_url} title={song.title} target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>
          {song.title}
        </a>
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={onPrevious}>Previous</button>
        <button className="nav-button" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
