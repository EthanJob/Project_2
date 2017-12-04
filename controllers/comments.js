const express = require('express');
const router  = express.Router();

// Model
const Comments = require('../models/comments.js');

// Index Route
router.get('/', async (req, res) => {
  const allComments = await Comments.find().populate('meme');
  res.send(allComments);
});

// Show Route
router.post('/', async (req, res) => {
  // console.log(req.body);
  try {
    const createdComment = await Comments.create(req.body);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
