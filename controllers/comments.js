const express = require('express');
const router  = express.Router();

// Models
const Meme = require('../models/memes.js');
const Comments = require('../models/comments.js');

// Index Route
router.get('/', async (req, res) => {
  const allComments = await Comments.find().populate('meme');
  res.send(allComments);
});

// Show Route
router.post('/', async (req, res) => {
  try {
    const createdComment = await Comments.create(req.body);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comments.findByIdAndRemove(req.params.id);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
