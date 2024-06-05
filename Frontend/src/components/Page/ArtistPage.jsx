import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`/api/artists/${id}`);
        setArtist(response.data);
      } catch (err) {
        setError('Error fetching artist data');
      }
    };

    fetchArtist();
  }, [id]);

  if (error) return <div className="error-message">{error}</div>;
  if (!artist) return <div>Loading...</div>;

  return (
    <div className="artist-page">
      <div className="artist-header" style={{ backgroundImage: `url(${artist.image})` }}>
        <div className="overlay">
          <h1 className="artist-name">{artist.name}</h1>
          <p className="artist-bio">{artist.bio}</p>
        </div>
      </div>
      <div className="artist-content">
        <h2>Songs</h2>
        <ul className="artist-list">
          {artist.songs && artist.songs.map((song) => (
            <li key={song.id}>
              <div className="song">
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
                <p className="album-release-date">{album.releaseDate}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistPage;
