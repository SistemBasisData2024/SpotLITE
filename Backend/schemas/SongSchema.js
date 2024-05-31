const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Song = db.define('Song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  albumCover: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  audioUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Song;