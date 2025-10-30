const Veiculo = require('../models/Veiculo');

module.exports = {
  // Create
  async store(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);
      return res.status(201).json(veiculo);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Retrieve (Listar todos)
  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll();
      return res.status(200).json(veiculos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar veículos Honda.' });
    }
  },

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Veiculo.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedVeiculo = await Veiculo.findByPk(id);
        return res.status(200).json(updatedVeiculo);
      }
      throw new Error('Veículo Honda não encontrado.');
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },

  // Delete
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Veiculo.destroy({
        where: { id: id }
      });
      if (deleted) {
        return res.status(204).json();
      }
      throw new Error('Veículo Honda não encontrado.');
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
