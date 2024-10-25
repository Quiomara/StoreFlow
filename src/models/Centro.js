const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Centro = sequelize.define('Centro', {
  cen_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cen_nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

module.exports = Centro;
