const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const homeRoute = require('./routes/HomeRoute');
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
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Routes
app.use('/home', homeRoute);
app.use('/playlists', playlistRoute);
app.use('/artists', artistRoute);
app.use('/albums', albumRoute);
app.use('/songs', songRoute);
app.use('/user', userRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});