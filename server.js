const express = require('express');
const cors = require('cors');
const sequelize = require('./database/sqlite');
const veiculoRoutes = require('./routes/veiculos');
    
// Importa o modelo para garantir que a tabela seja criada (sincronizada)
require('./models/Veiculo'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/veiculos', veiculoRoutes); 

// Inicialização
async function init() {
  try {
    // Tenta autenticar a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    
    // Sincroniza os modelos (cria a tabela se não existir)
    await sequelize.sync(); 
    console.log('Banco de dados sincronizado (honda_veiculos).');

    app.listen(PORT, () => {
      console.log(`Servidor Honda rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

init();
