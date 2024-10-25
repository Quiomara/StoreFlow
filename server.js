require('dotenv').config(); //Se carga las variables de entorno

const app = require('./src/app');//Se importa la aplicación de app.js
const sequelize = require('./src/config/database'); //Se importa la configuración de la base de datos

//Se inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  
  try {
    //Conexión y sincronización con la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    
    await sequelize.sync(); //Se sincroniza los modelos con la base de datos
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error conectando o sincronizando con la base de datos:', error);
  }
});
