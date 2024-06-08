import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user, setUser } = useContext(UserContext);
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page after logout
  };

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/playlists');
        setPlaylists(response.data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setPlaylists([]);
      }
    };

    const fetchArtists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/artists');
        setArtists(response.data);
      } catch (error) {
        console.error('Error fetching artists:', error);
        setArtists([]);
      }
    };

    fetchPlaylists();
    fetchArtists();
  }, []);

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink to="/home" className="menu-item" activeclassname="active">
          <i className="icon-home"></i>
          <span>Home</span>
        </NavLink>
        {user && (
          <NavLink to="/profile" className="menu-item" activeclassname="active">
            <i className="icon-profile"></i>
            <span>Profile</span>
          </NavLink>
        )}
        <div className="menu-item" onClick={user ? handleLogout : () => navigate('/login')}>
          <i className={user ? "icon-logout" : "icon-login"}></i>
          <span>{user ? "Logout" : "Login now"}</span>
        </div>
      </div>
      <div className="library">
        <h2>Your Library</h2>
        <div className="library-tabs">
          <NavLink to="/playlists" className="library-tab" activeclassname="active">Playlists</NavLink>
          <NavLink to="/artists" className="library-tab" activeclassname="active">Artists</NavLink>
          <NavLink to="/create-playlist" className="library-tab" activeclassname="active">Create Playlist</NavLink>
        </div>
        <ul className="library-list">
          {location.pathname.includes('/playlists') && 
            Array.isArray(playlists) && playlists.map((playlist) => (
              <NavLink to={`/playlists/${playlist.id}`} className="library-item" activeclassname="active" key={playlist.id}>
                {playlist.name}
              </NavLink>
            ))
          }
          {location.pathname.includes('/artists') && 
            Array.isArray(artists) && artists.map((artist) => (
              <NavLink to={`/artists/${artist.id}`} className="library-item" activeclassname="active" key={artist.id}>
                {artist.name}
              </NavLink>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;