const express = require('express');
const { sequelize } = require('./models');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());

// Importar rutas que vaya creando
const projectRoutes = require('./routes/project');
const skillRoutes = require('./routes/skill');
const contact = require('./routes/contact');

// Usar rutas
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/contact', contact);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Jalando ando!');
});

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor volando http://localhost:${port}`);
    });
}).catch((error) => {
    console.log('Error en la sincronizacion de la BDD: ', error);
});
