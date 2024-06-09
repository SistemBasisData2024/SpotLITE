const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const homeRoute = require('./routes/SongRoute');
const playlistRoute = require('./routes/PlaylistRoute');
const artistRoute = require('./routes/ArtistRoute');
const albumRoute = require('./routes/AlbumRoute');
const songRoute = require('./routes/SongRoute');
const userRoute = require('./routes/UserRoute');

dotenv.config();

const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());

// Configure CORS
app.use(cors());

// Routes
app.use('/songs', songRoute);
app.use('/playlists', playlistRoute);
app.use('/playlists/:id', playlistRoute);
app.use('/artists', artistRoute);
app.use('/artists/:id', artistRoute);
app.use('/albums', albumRoute);
app.use('/user', userRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});