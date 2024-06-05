import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';  // Make sure to import Routes and Route
import './App.css';
import Sidebar from './components/Page/Sidebar';
import MusicPlayer from './components/Page/PlayMusicPage'; 

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default App;
