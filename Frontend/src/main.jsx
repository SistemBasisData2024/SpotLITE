import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AlbumPage from './components/Page/AlbumPage';
import ArtistPage from './components/Page/ArtistPage';
import HomePage from './components/Page/HomePage';
import PlaylistPage from './components/Page/PlaylistPage';
import PlayMusicPage from './components/Page/PlayMusicPage';
import Login from './components/User/Login';
import Signup from './components/User/Signup';

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="album" element={<AlbumPage />} />
            <Route path="artists" element={<ArtistPage />} />
            <Route path="playlist" element={<PlaylistPage />} />
            <Route path="playmusic" element={<PlayMusicPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);