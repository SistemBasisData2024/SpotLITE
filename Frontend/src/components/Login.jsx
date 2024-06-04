import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
      console.log('User logged in:', response.data);
      // Redirect to dashboard or another page
    } catch (err) {
      setError(err.response?.data?.error || 'Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Log in to SpotLITE</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p>
        Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
      </p>
    </div>
  );
};

export default Login;