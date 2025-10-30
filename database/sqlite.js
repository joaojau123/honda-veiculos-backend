const { Sequelize } = require('sequelize');

// Configuração da conexão SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './honda_database.sqlite', // Arquivo específico para Honda
  logging: false // Desabilita logs de consulta no console
});

module.exports = sequelize;
