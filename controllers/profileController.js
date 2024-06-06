const { Profile } = require ('../models');

exports.createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.findAll();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



