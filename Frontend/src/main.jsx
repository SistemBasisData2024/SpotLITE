import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AlbumPage from './components/AlbumPage';
import ArtistPage from './components/ArtistPage';
import HomePage from './components/HomePage';
import PlaylistPage from './components/PlaylistPage';
import PlayMusicPage from './components/PlayMusicPage';
import Login from './components/Login';
import Signup from './components/Signup';

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="album" element={<AlbumPage />} />
            <Route path="artist" element={<ArtistPage />} />
            <Route path="playlist" element={<PlaylistPage />} />
            <Route path="playmusic" element={<PlayMusicPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
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