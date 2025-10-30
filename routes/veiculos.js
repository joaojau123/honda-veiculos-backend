const express = require('express');
const VeiculoController = require('../controllers/VeiculoController');

const router = express.Router();

// Rotas CRUD
router.post('/', VeiculoController.store);    // Criar (Create)
router.get('/', VeiculoController.index);     // Listar (Retrieve)
router.put('/:id', VeiculoController.update); // Atualizar (Update)
router.delete('/:id', VeiculoController.destroy);// Remover (Delete)

module.exports = router;
