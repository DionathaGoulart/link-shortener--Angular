const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Conectar ao banco de dados
connectDB()
  .then(() => console.log('✅ MongoDB conectado com sucesso!'))
  .catch(err => {
    console.error('❌ Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  });

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/urls', require('./routes/urls'));

// Rota para redirecionamento
app.get('/:code', async (req, res) => {
  try {
    const url = await require('./models/url').findOne({ urlCode: req.params.code });

    if (url) {
      // Incrementar contador de cliques
      url.clicks++;
      await url.save();

      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: 'URL não encontrada' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));