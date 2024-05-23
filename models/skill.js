const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Skill = sequelize.define('Skill', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    // Suponiendo que la competencia es de 1 a 100
    proficiency: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Skill;
