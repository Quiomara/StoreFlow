const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoUsuario = sequelize.define('TipoUsuario', {
  tip_usr_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tip_usr_nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
});

module.exports = TipoUsuario;
