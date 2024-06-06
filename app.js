const express = require('express');
const sequelize = require('./config/database'); // Importa sequelize desde la configuración de la base de datos
const app = express();
const cors = require('cors');
const contactsRoutes = require('./routes/contact'); // Importa las rutas de contacts
const Profile = require('./models/profile'); // Asegúrate de que 'profile' esté en minúsculas
const profileRoutes = require('./routes/profile'); // Importa las rutas de profile

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Usar rutasq
app.use('/contacts', contactsRoutes);
app.use('/profile', profileRoutes);


// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Jalando ando!');
});

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync().then(async () => {
  // Crear un perfil predeterminado
  try {
    const defaultProfile = {
      firstName: 'Luis',
      lastName: 'Peraza',
      dateOfBirth: '1990-01-01', // Ajusta según tus necesidades
      description: 'Este es un perfil predeterminado'
    };

    // Verificar si el perfil predeterminado ya existe
    const existingProfile = await Profile.findOne({ where: { firstName: 'Luis', lastName: 'Peraza' } });

    if (!existingProfile) {
      await Profile.create(defaultProfile);
      console.log('Perfil predeterminado creado.');
    } else {
      console.log('El perfil predeterminado ya existe.');
    }
  } catch (error) {
    console.error('Error al crear el perfil predeterminado:', error);
  }

  app.listen(port, () => {
    console.log(`Servidor volando http://localhost:${port}`);
  });
}).catch((error) => {
  console.log('Error en la sincronización de la BDD: ', error);
});
