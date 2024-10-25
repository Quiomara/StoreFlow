const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UbicacionElemento = require('./UbicacionElemento');

const Elemento = sequelize.define('Elemento', {
  ele_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ele_nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  ele_cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ele_imagen: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Relación con Ubicación
Elemento.belongsTo(UbicacionElemento, { foreignKey: 'ubi_ele_id' });

module.exports = Elemento;
