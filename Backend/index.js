const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const homeRoute = require('./routes/HomeRoute');
const playlistRoute = require('./routes/PlaylistRoute');
const artistRoute = require('./routes/ArtistRoute');
const albumRoute = require('./routes/AlbumRoute');
const songRoute = require('./routes/SongRoute');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to PostgreSQL
db.authenticate()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database:', err));

// Routes
app.use('/home', homeRoute);
app.use('/playlists', playlistRoute);
app.use('/artists', artistRoute);
app.use('/albums', albumRoute);
app.use('/songs', songRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});