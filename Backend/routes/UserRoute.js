const express = require('express');
const router = express.Router();
const userRepo = require('../repositories/UserRepo');

// Middleware to handle CORS for this route
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Route to sign up a new user
router.post('/signup', async (req, res) => {
  try {
    const newUser = await userRepo.userSignup(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to log in a user
router.post('/login', async (req, res) => {
  try {
    const user = await userRepo.userLogin(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await userRepo.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;