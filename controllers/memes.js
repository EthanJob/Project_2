const express = require('express');
const router  = express.Router();

// Models
const Meme = require('../models/memes.js');
const Comments = require('../models/comments.js');

// Test Routes
router.get('/test/memes', async (req, res) => {
  const allMemes = await Meme.find();
  res.send({allMemes});
});

router.get('/test/comments', async (req, res) => {
  const allComments = await Comments.find();
  res.send({allComments});
});

// Index Route
router.get('/', async (req, res) => {
  const allMemes = await Meme.find().sort({createdAt: -1});
  res.render('index.ejs', {allMemes});
});

// New Route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Show Route
router.get('/meme/:id', async (req, res) => {
  const oneMeme = await Meme.findById(req.params.id);
  const comments = await Comments.find( { meme: oneMeme._id } );
  res.render('show.ejs', {oneMeme, comments});
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
