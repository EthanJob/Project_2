const mongoose = require('mongoose');

const memeSchema = mongoose.Schema({
  posted_by: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Meme', memeSchema);
