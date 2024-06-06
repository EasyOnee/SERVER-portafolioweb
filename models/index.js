const sequelize = require('../config/database');
const Contact = require('./Contact');
const Profile = require('./profile');

Profile.hasMany(Contact, { foreignKey: 'profileId' });
Contact.belongsTo(Profile, { foreignKey: 'profileId' });


module.exports = {
    Contact,
    Profile
};
