import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Page/Sidebar';
import MusicPlayer from './components/Page/PlayMusic'; 

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