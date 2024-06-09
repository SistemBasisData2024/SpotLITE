import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PlaylistPage.css';

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/playlists');
        setPlaylists(response.data);
      } catch (err) {
        setError('Error fetching playlists data');
        console.error('Error fetching playlists data:', err);
      }
    };

    const fetchPlaylistById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/playlists/${id}`);
        setPlaylist(response.data);
      } catch (err) {
        setError('Error fetching playlist data');
        console.error('Error fetching playlist data:', err);
      }
    };

    if (id) {
      fetchPlaylistById();
    } else {
      fetchAllPlaylists();
    }
  }, [id]);

  const handlePlaylistClick = (id) => {
    navigate(`/playlists/${id}`);
  };

  if (error) return <div className="error-message">{error}</div>;

  if (!id) {
    return (
      <div className="playlists-page">
        <h1>All Playlists</h1>
        <div className="playlists-list">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="playlist-card"
              onClick={() => handlePlaylistClick(playlist.id)}
            >
              <div className="playlist-name">{playlist.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!playlist) return <div>Loading...</div>;

  const handleEdit = () => {
    navigate(`/create-playlist?edit=${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/playlists/${id}`);
      navigate('/playlists');
    } catch (err) {
      setError('Error deleting playlist');
    }
  };

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <div className="playlist-info">
          <h2 className="playlist-title">{playlist.name}</h2>
          <p className="playlist-details">{playlist.songs ? playlist.songs.length : 0} songs</p>
        </div>
      </div>
      <div className="playlist-controls">
        <button className="play-button">Play</button>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
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