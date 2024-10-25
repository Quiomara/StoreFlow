const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UbicacionElemento = sequelize.define('UbicacionElemento', {
  ubi_ele_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ubi_nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

module.exports = UbicacionElemento;
