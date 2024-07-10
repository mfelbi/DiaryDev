const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // Import model Article

// logic search
router.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const regex = new RegExp(query.split(' ').join('|'), 'i'); // Regex untuk pencarian berbasis kata
    const articles = await Article.find({
      title: regex // Pencarian berdasarkan judul artikel
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
