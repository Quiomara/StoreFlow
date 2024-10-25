const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Prestamo = require('./Prestamo');
const Elemento = require('./Elemento');

const PrestamoElemento = sequelize.define('PrestamoElemento', {
  pre_ele_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pre_ele_cantidad_prestado: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Relaciones
PrestamoElemento.belongsTo(Prestamo, { foreignKey: 'pre_id' });
PrestamoElemento.belongsTo(Elemento, { foreignKey: 'ele_id' });

module.exports = PrestamoElemento;
