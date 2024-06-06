const Profile = require('../models/profile'); // Asegúrate de que 'profile' esté en minúsculas

// Crear un perfil
exports.createProfile = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, description } = req.body;
    const profile = await Profile.create({
      firstName,
      lastName,
      dateOfBirth,
      description
    });
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log('Error no se creó el perfil: ', error);
  }
};

// Obtener todos los perfiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log('Error al obtener los perfiles: ', error);
  }
};

// Obtener un perfil por ID
exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByPk(id);

    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ error: 'Perfil no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log('Error al obtener el perfil: ', error);
  }
};

// Actualizar un perfil
exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, dateOfBirth, description } = req.body;
    const profile = await Profile.findByPk(id);

    if (profile) {
      profile.firstName = firstName;
      profile.lastName = lastName;
      profile.dateOfBirth = dateOfBirth;
      profile.description = description;
      await profile.save();
      res.status(200).json(profile);
    } else {
      res.status(404).json({ error: 'Perfil no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log('Error al actualizar el perfil: ', error);
  }
};
