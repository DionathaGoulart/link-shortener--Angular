const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const shortid = require('shortid');
const validUrl = require('valid-url');

// @route POST /api/urls
// @desc Criar URL curta
router.post('/', async (req, res) => {
  console.log('Recebida requisição POST para /api/urls:', req.body);
  const { originalUrl } = req.body;
  const baseUrl = process.env.BASE_URL || 'http://localhost:5000';

  // Verificar URL original
  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ error: 'URL inválida' });
  }

  try {
    // Verificar se a URL já existe no banco de dados
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json(url);
    }

    // Criar código para URL curta
    const urlCode = shortid.generate();
    const shortUrl = `${baseUrl}/${urlCode}`;

    // Criar e salvar nova URL
    url = new Url({
      originalUrl,
      shortUrl,
      urlCode,
      date: new Date()
    });
    await url.save();
    res.json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// @route GET /api/urls
// @desc Obter todas as URLs
router.get('/', async (req, res) => {
  try {
    const urls = await Url.find().sort({ date: -1 });
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// @route DELETE /api/urls/:id
// @desc Excluir uma URL pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);

    if (!url) {
      return res.status(404).json({ error: 'URL não encontrada' });
    }

    await url.deleteOne();
    res.json({ message: 'URL removida com sucesso' });
  } catch (err) {
    console.error(err);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ error: 'URL não encontrada' });
    }
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;