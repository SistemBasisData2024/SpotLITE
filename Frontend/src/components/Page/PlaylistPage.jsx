import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PlaylistPage.css';

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`/api/playlists/${id}`);
        setPlaylist(response.data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, [id]);

  if (!playlist) return <div>Loading...</div>;

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <div className="playlist-image" style={{ backgroundImage: `url(${playlist.image})` }}></div>
        <div className="playlist-info">
          <h2 className="playlist-title">{playlist.name}</h2>
          <p className="playlist-owner">by {playlist.owner}</p>
          <p className="playlist-details">{playlist.songs ? playlist.songs.length : 0} songs, {playlist.duration}</p>
        </div>
      </div>
      <div className="playlist-controls">
        <button className="play-button">Play</button>
        <button className="shuffle-button">Shuffle</button>
      </div>
      <div className="playlist-songs">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs && playlist.songs.map((song, index) => (
              <tr key={song.id}>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;