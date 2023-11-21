// Sequelize é uma aplicação usada para interagir bancos de dados relacionais com o Node.
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;