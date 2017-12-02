const express = require('express');
const router  = express.Router();

// Models
const Picture = require('../models/pictures.js');

// Index Route
router.get('/', (req, res) => {
  res.render('index.ejs');
});

// New Route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Show Route
router.get('/pic', (req, res) => {
  res.render('show.ejs');
});

module.exports = router;
