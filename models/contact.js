const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta según tu configuración



const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectProposal: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'contacts',
    timestamps: false 
});

module.exports = Contact;
