const express = require('express');
const router = express.Router();
const db = require('../models'); // ✅ Import centralisé

const Specialite = db.Specialite;
const Category = db.Category;

router.get('/', async (req, res) => {
  try {
    const specialites = await Specialite.findAll({ include: Category });
    res.json(specialites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;