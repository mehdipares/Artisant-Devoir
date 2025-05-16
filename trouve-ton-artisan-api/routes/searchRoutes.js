const express = require('express');
const router = express.Router();
const db = require('../models');  // ✅ Centralisation
const { Op } = require('sequelize');

const Artisan = db.Artisan;
const Specialite = db.Specialite;

router.get('/', async (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) {
    return res.status(400).json({ message: 'Le paramètre de recherche "q" est requis.' });
  }

  try {
    const artisans = await Artisan.findAll({
      where: {
        nom: {
          [Op.like]: `%${searchQuery}%`
        }
      },
      include: Specialite
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
