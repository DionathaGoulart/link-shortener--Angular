const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB conectado com sucesso!');
    return Promise.resolve();
  } catch (err) {
    console.error('❌ Erro ao conectar ao MongoDB:', err.message);
    return Promise.reject(err);
  }
};

module.exports = connectDB;