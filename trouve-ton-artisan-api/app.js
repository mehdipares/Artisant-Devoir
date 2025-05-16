require('dotenv').config();
const express = require('express');
const cors = require('cors');

// 👉 Correction ici : on importe le fichier models/index.js
const db = require('./models');

const categoryRoutes = require('./routes/categoryRoutes');
const specialiteRoutes = require('./routes/specialiteRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/specialites', specialiteRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/search', searchRoutes);

// Route de test
app.get('/api', (req, res) => res.send('API en ligne 🚀'));

// ✅ Test de connexion à la base de données avec la bonne instance
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Connecté à la base de données MySQL');
  } catch (error) {
    console.error('❌ Erreur de connexion :', error);
  }
})();

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
