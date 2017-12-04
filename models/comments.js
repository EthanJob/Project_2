const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  meme: { type: mongoose.Schema.Types.ObjectId, ref: 'Meme' }
});

module.exports = mongoose.model('Comment', commentSchema);
