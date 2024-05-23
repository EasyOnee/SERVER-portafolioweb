const { Contact } = require('../models');

exports.createContact = async (req, res) => {
    try {
        const project = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllContact = async (req, res) => {
    try {
        const contact = await Contact.findAll();
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
