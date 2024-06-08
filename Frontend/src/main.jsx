import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import CreatePlaylist from './components/Page/CreatePlaylist';
import ArtistPage from './components/Page/ArtistPage';
import HomePage from './components/Page/HomePage';
import PlaylistPage from './components/Page/PlaylistPage';
import PlayMusicPage from './components/Page/PlayMusic';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import ProfilePage from './components/Page/ProfilePage';
import { UserProvider } from './context/UserContext';

const Main = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<HomePage />} />
            <Route path="artists" element={<ArtistPage />} />
            <Route path="artists/:id" element={<ArtistPage />} />
            <Route path="playlists" element={<PlaylistPage />} />
            <Route path="playlists/:id" element={<PlaylistPage />} />
            <Route path="playmusic" element={<PlayMusicPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="create-playlist" element={<CreatePlaylist />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);