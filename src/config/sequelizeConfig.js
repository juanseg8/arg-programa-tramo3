const { Sequelize } = require('sequelize');

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

const dataBase = async () => {
    try {
        await sequelize.sync();
        console.log('Conexion establecida con extio');
    } catch (error) {
        console.log('Error:', error);
    }
}

module.exports = {
    dataBase,
    sequelize
} 

