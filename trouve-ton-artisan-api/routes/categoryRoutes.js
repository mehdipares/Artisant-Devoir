const express = require('express');
const router = express.Router();
const db = require('../models'); // ✅ On passe par index.js
const Category = db.Category;    // ✅ On récupère l'instance

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
