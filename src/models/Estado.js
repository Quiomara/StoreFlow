const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estado = sequelize.define('Estado', {
  est_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  est_nombre: {
    type: DataTypes.STRING(15),
    allowNull: false
  }
});

module.exports = Estado;
