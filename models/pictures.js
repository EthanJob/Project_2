const mongoose = require('mongoose');

const picSchema = mongoose.Schema({
  posted_by: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Picture', picSchema);
