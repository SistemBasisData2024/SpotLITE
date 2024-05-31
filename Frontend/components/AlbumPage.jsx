import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AlbumPage.css';

const AlbumPage = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [newAlbumReleaseDate, setNewAlbumReleaseDate] = useState('');

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleCreateAlbum = async () => {
    try {
      const response = await axios.post('/albums', { title: newAlbumTitle, releaseDate: newAlbumReleaseDate });
      setAlbums([...albums, response.data]);
      setNewAlbumTitle('');
      setNewAlbumReleaseDate('');
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  const handleDeleteAlbum = async (id) => {
    try {
      await axios.delete(`/albums/${id}`);
      setAlbums(albums.filter(album => album._id !== id));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <div className="album-container">
      <h1>Albums</h1>
      <div className="album-form">
        <input
          type="text"
          placeholder="Enter album title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter release date"
          value={newAlbumReleaseDate}
          onChange={(e) => setNewAlbumReleaseDate(e.target.value)}
        />
        <button onClick={handleCreateAlbum}>Create Album</button>
      </div>
      <div className="album-list">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <h3>{album.title}</h3>
            <p>Release Date: {album.releaseDate}</p>
            <button onClick={() => handleDeleteAlbum(album._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;