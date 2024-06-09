import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ArtistPage from './components/Page/ArtistPage';
import HomePage from './HomePage';
import PlaylistPage from './PlaylistPage';
import ProfilePage from './components/Page/ProfilePage';
import CreatePlaylistPage from './components/Page/CreatePlaylist';
import Login from './components/User/Login';
import Login from './components/User/Signup';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/playlists/:id" element={<PlaylistPage />} />
        <Route path="/artists" element={<ArtistPage />} />
        <Route path="/artists/:id" element={<ArtistPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);