const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConfig')

const UsuarioModelo1 = sequelize.define('User', {
    // Model attributes are defined here
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

module.exports = UsuarioModelo1