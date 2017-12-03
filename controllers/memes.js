const express = require('express');
const router  = express.Router();

// Models
const Picture = require('../models/memes.js');

// Index Route
router.get('/', (req, res) => {
  res.render('index.ejs');
});

// New Route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Show Route
router.get('/meme', (req, res) => {
  res.render('show.ejs');
});

module.exports = router;
