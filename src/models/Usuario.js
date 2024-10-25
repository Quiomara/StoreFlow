const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Centro = require('./Centro');
const TipoUsuario = require('./TipoUsuario');

const Usuario = sequelize.define('Usuario', {
  usr_cedula: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  usr_primer_nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  usr_segundo_nombre: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  usr_primer_apellido: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  usr_segundo_apellido: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  usr_correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  usr_contrasena: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  usr_telefono: {
    type: DataTypes.STRING(10),
    allowNull: true,
    unique: true
  }
});

// Relaciones
Usuario.belongsTo(Centro, { foreignKey: 'cen_id' });
Usuario.belongsTo(TipoUsuario, { foreignKey: 'tip_usr_id' });

module.exports = Usuario;

