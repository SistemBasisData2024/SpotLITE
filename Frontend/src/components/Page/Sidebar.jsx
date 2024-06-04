import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('/api/playlists');
        setPlaylists(response.data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setPlaylists([]); // Ensure playlists is always an array
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink to="/home" className="menu-item" activeClassName="active">
          <i className="icon-home"></i>
          <span>Home</span>
        </NavLink>
        <NavLink to="/search" className="menu-item" activeClassName="active">
          <i className="icon-search"></i>
          <span>Search</span>
        </NavLink>
      </div>
      <div className="library">
        <h2>Your Library</h2>
        <div className="library-tabs">
          <NavLink to="/playlists" className="library-tab" activeClassName="active">Playlists</NavLink>
          <NavLink to="/artists" className="library-tab" activeClassName="active">Artists</NavLink>
        </div>
        <ul className="library-list">
          {Array.isArray(playlists) && playlists.map((playlist) => (
            <NavLink to={`/playlist/${playlist.id}`} className="library-item" activeClassName="active" key={playlist.id}>
              {playlist.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="create-playlist">
        <button>Create Playlist</button>
      </div>
    </div>
  );
};

export default Sidebar;