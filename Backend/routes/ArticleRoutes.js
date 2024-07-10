const express = require('express');
const { auth } = require('../middleware/auth');
const Article = require('../models/Article');

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('comments.user', 'username');
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a comment to an article
router.post('/:id/comments', auth, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    const comment = { user: req.user._id, content: req.body.content };
    article.comments.push(comment);
    await article.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
