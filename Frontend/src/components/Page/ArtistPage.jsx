import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllArtists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/artists');
        setArtists(response.data);
      } catch (err) {
        setError('Error fetching artists data');
        console.error('Error fetching artists data:', err);
      }
    };

    const fetchArtistById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/artists/${id}`);
        setArtist(response.data);
      } catch (err) {
        setError('Error fetching artist data');
        console.error('Error fetching artist data:', err);
      }
    };

    if (id) {
      fetchArtistById();
    } else {
      fetchAllArtists();
    }
  }, [id]);

  const handleArtistClick = (id) => {
    navigate(`/artists/${id}`);
  };

  const handleSongClick = (song) => {
    navigate('/home', { state: { selectedSong: song } });
  };

  if (error) return <div className="error-message">{error}</div>;

  if (!id) {
    return (
      <div className="artists-page">
        <h1>All Artists</h1>
        <div className="artists-list">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="artist-card"
              onClick={() => handleArtistClick(artist.id)}
            >
              <img src={artist.photo_url} alt={artist.name} className="artist-image" />
              <div className="artist-name">{artist.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!artist) return <div>Loading...</div>;

  return (
    <div className="artist-page">
      <div className="artist-header" style={{ backgroundImage: `url(${artist.photo_url})` }}>
        <div className="overlay">
          <h1 className="artist-name">{artist.name}</h1>
          <p className="artist-bio">{artist.bio}</p>
        </div>
      </div>
      <div className="artist-content">
        <h2>Songs</h2>
        <ul className="artist-list">
          {artist.songs && artist.songs.map((song) => (
            <li key={song.id} onClick={() => handleSongClick(song)} style={{ cursor: 'pointer' }}>
              <div className="song">
                <img src={song.cover_url} alt={song.title} className="song-image" />
                <div>
                  <p className="song-title">{song.title}</p>
                  {song.artists && (
                    <p className="song-artists">
                      {song.artists.map((artist) => artist.name).join(', ')}
                    </p>
                  )}
                </div>
                <p className="song-plays">{song.plays} plays</p>
              </div>
            </li>
          ))}
        </ul>
        <h2>Albums</h2>
        <ul className="artist-list">
          {artist.albums && artist.albums.map((album) => (
            <li key={album.id}>
              <div className="album">
                <p className="album-title">{album.title}</p>
                <p className="album-release-date">{album.release_date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistPage;
