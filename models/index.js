const sequelize = require('../config/database');
const Project = require('./project');
const Skill = require('./skill');
const Contact = require('./contact');

Project.belongsToMany(Skill, { through: 'ProjectSkills' });
Skill.belongsToMany(Project, { through: 'ProjectSkills' });
Contact.belongsToMany(Contact, { as: 'Contacts', through: 'ContactContacts' });

module.exports = {
    sequelize,
    Project,
    Skill,
    Contact
};
