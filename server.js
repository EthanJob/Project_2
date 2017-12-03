const express  = require('express');
const mongoose = require('mongoose');
const app      = express();
const PORT     = 3000;

// Database connection
const mongoURI = 'mongodb://localhost:27017/photo_comments'; // CHANGE
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// Connection test
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

// Controllers
const memesController = require('./controllers/memes.js');

// Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/home', memesController);

// Root route
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Listener
app.listen(PORT, () => {
  console.log("================");
  console.log("Listening...");
  console.log("================");
});
