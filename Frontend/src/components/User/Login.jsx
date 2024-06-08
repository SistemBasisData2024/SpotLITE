import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; // Ensure correct import path
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext); // Use the context to set the user
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', { email, password });
      console.log('User logged in:', response.data);
      setUser(response.data); // Set the user in context
      localStorage.setItem('user', JSON.stringify(response.data)); // Store user in local storage
      navigate('/home'); // Redirect to home page after successful login
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