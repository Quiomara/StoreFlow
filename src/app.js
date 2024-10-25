const express = require('express'); //Se importa express
const app = express(); //Se crea la instancia de express

app.use(express.json()); //Middleware para procesar JSON

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a Store Flow');
});

module.exports = app; //Se exporta la aplicación
