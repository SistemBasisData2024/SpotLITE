const pool = require('../config/db');
const bcrypt = require('bcrypt');

// Function to sign up a new user
const userSignup = async (userData) => {
  const { username, email, password } = userData;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const result = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, hashedPassword]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error(`Error signing up user: ${error.message}`);
  }
};

// Function to log in a user
const userLogin = async (userData) => {
  const { email, password } = userData;
  try {
    // Retrieve user from the database based on email
    const result = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    const user = result.rows[0];

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }

    // Passwords match
    return user;
  } catch (error) {
    throw new Error(`Error logging in user: ${error.message}`);
  }
};

// Function to get a user by ID
const getUserById = async (userId) => {
  try {
    const query = `SELECT username, email FROM users WHERE id = $1`;
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

module.exports = {
  userSignup,
  userLogin,
  getUserById,
};