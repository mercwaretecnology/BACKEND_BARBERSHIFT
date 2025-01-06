
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error interno en el servidor.' });
});

// Iniciar el servidor
app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err.message);
    process.exit(1);
  }
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/', (req, res, next) => {
  console.log(req.headers);
  res.send('Servidor ejecuntandose');
});
