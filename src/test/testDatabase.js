const sequelize = require('../config/database'); //Se ajusta la ruta según la ubicación del archivo database.js

//Se prueba la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos con Sequelize.');
  })
  .catch(err => {
    console.error('Error conectando a la base de datos:', err);
  });
