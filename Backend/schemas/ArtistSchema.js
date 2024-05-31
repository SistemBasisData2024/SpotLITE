const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Artist = db.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Assuming albums is a separate table with a foreign key reference to Artist
});

module.exports = Artist;