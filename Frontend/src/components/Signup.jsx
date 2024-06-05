import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        username,
        email,
        password,
      });
      setSuccess('Account created successfully. You can now log in.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error signing up');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign up to start listening</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
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
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login" className="login-link">Log in here.</a>
      </p>
    </div>
  );
};

export default Signup;