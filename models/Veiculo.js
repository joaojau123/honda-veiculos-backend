const { DataTypes } = require('sequelize');
const sequelize = require('../database/sqlite');

const Veiculo = sequelize.define('Veiculo', {
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        min: 1900,
        max: 2100
    }
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
        min: 0.01
    }
  }
}, {
  tableName: 'honda_veiculos', // Nome da tabela no banco
  timestamps: true
});

module.exports = Veiculo;
