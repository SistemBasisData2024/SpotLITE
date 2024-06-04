import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ArtistPage from './ArtistPage';
import HomePage from './HomePage';
import PlaylistPage from './PlaylistPage';
import PlayMusicPage from './PlayMusicPage';
import AlbumPage from './AlbumPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="playlists" element={<PlaylistPage />} />
        <Route path="playlist/:id" element={<PlayMusicPage />} />
        <Route path="artist/:id" element={<ArtistPage />} />
        <Route path="album/:id" element={<AlbumPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);