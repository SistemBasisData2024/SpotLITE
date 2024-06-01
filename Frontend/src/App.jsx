import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <i className="fas fa-home"></i>
            </div>
            <div className="sidebar-search">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="sidebar-library">
            <h2>Your Library</h2>
            <ul className="library-items">
              <li className="library-item">
                <i className="fas fa-heart"></i>
                <span>Liked Songs</span>
              </li>
              {/* Add more items here */}
            </ul>
          </div>
        </aside>
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* Add more routes here */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;