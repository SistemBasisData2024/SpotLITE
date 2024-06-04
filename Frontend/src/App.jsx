import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Page/Sidebar';  

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;