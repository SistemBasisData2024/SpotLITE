import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`/api/artists/${id}`);
        setArtist(response.data);
      } catch (error) {
        console.error('Error fetching artist:', error);
      }
    };

    fetchArtist();
  }, [id]);

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
        <ul>
          {artist.songs && artist.songs.map((song) => (
            <li key={song.id}>
              <div className="song">
                <p>{song.title}</p>
                <p>{song.plays} plays</p>
              </div>
            </li>
          ))}
        </ul>
        <h2>Albums</h2>
        <ul>
          {artist.albums && artist.albums.map((album) => (
            <li key={album.id}>
              <div className="album">
                <p>{album.title}</p>
                <p>{album.releaseDate}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistPage;