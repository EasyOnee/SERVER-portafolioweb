const express = require('express');
const { sequelize } = require('./models');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Importar rutas que vayas creando
const contactRoutes = require('./routes/contact'); // Importa las rutas de contact
const projectRoutes = require('./routes/project'); // Importa las rutas de project
const skillRoutes = require('./routes/skill'); // Importa las rutas de skill
// Usar rutas
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/contacts', contactRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Jalando ando!');
});


// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
}).catch((error) => {
    console.log('Error en la sincronización de la BDD: ', error);
});
