const { Contact } = require('../models');


exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact); // Corregir la variable enviada en la respuesta
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllContact = async (req, res) => {
    try {
        const contacts = await Contact.findAll(); // Cambiar el nombre de la variable para evitar confusiones
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
