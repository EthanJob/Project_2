const mongoose = require('mongoose');

const memeSchema = mongoose.Schema({
  posted_by: { type: String, required: true },
  url: { type: String, required: true },
  date_posted: { type: String }
}, {timestamps: true});

module.exports = mongoose.model('Meme', memeSchema);
