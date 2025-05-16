const express = require('express');
const router = express.Router();
const db = require('../models');  // ✅ Import centralisé

const Artisan = db.Artisan;
const Specialite = db.Specialite;

router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({ include: Specialite });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/top', async (req, res) => {
  try {
    const artisans = await db.Artisan.findAll({
      limit: 3,
      include: db.Specialite
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, { include: Specialite });
    if (!artisan) return res.status(404).json({ message: 'Artisan non trouvé' });
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// routes/artisanRoutes.js

router.get('/by-category/:categorieId', async (req, res) => {
  try {
    const { categorieId } = req.params;

    // Chercher d'abord les spécialités liées à la catégorie demandée
    const specialites = await db.Specialite.findAll({
      where: { categorieId: categorieId }
    });

    const specialiteIds = specialites.map(s => s.id);

    if (specialiteIds.length === 0) {
      return res.status(404).json({ message: 'Aucune spécialité trouvée pour cette catégorie.' });
    }

    // Chercher les artisans liés à ces spécialités
    const artisans = await db.Artisan.findAll({
      where: {
        specialiteId: specialiteIds
      },
      include: db.Specialite
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ Récupérer les artisans par spécialité
router.get('/by-specialite/:specialiteId', async (req, res) => {
  try {
    const { specialiteId } = req.params;

    const artisans = await db.Artisan.findAll({
      where: { specialiteId: specialiteId },
      include: db.Specialite
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;