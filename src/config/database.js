const { Sequelize } = require('sequelize'); //Se importa Sequelize
require('dotenv').config(); //Se carga las variables de entorno

// Configuración de la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, 
    dialect: 'mariadb',
    logging: console.log //Muestra las consultas SQL en la consola
  }
);

//Se exporta la conexión
module.exports = sequelize;
