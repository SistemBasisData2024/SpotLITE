import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
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