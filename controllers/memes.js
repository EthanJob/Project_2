const express = require('express');
const router  = express.Router();

// Models
const Meme = require('../models/memes.js');

// Test Route
router.get('/test', async (req, res) => {
  const allMemes = await Meme.find();
  res.send({allMemes});
});

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

// Create Route
router.post('/', async (req, res) => {
  try {
    const createdMeme = await Meme.create(req.body);
    res.redirect('/home');
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
