const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Home = db.define('Home', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more fields if needed, e.g., duration, genre, etc.
});

module.exports = Home;