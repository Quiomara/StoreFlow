const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Estado = require('./Estado');

const Prestamo = sequelize.define('Prestamo', {
  pre_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pre_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  pre_fin: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Relaciones
Prestamo.belongsTo(Usuario, { foreignKey: 'usr_cedula' });
Prestamo.belongsTo(Estado, { foreignKey: 'est_id' });

module.exports = Prestamo;
