const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Playlist = db.define('Playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // You can add more fields like description, owner (user ID), etc. as needed
  });
  
  module.exports = Playlist;