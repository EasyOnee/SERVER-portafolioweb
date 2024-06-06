const express = require('express');
const sequelize = require('./config/database'); // Importa sequelize desde la configuración de la base de datos
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Importar rutas que vayas creando
const contactRoutes = require('./routes/contact'); // Importa las rutas de contact
const profileRoutes = require('./routes/profile'); // Importa las rutas de profile

// Usar rutas
app.use('/profile', profileRoutes);
app.use('/contacts', contactRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Jalando ando!');
});

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor volando http://localhost:${port}`);
  });
}).catch((error) => {
  console.log('Error en la sincronización de la BDD: ', error);
});
