const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Album = db.define('Album', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Add more fields as needed
});

module.exports = Album;