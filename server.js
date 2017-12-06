const express  = require('express');
const methodOverride =require('method-override');
const mongoose = require('mongoose');
const app      = express();
const PORT     = process.env.PORT || 3000;

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/web_app';

mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// Connection test
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

// Controllers
const memesController = require('./controllers/memes.js');
const commentsController = require('./controllers/comments.js');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/home', memesController);
app.use('/comments', commentsController);

// Root route
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Listener
app.listen(PORT, () => {
  console.log("========================");
  console.log("Listening on Port:", PORT);
  console.log("========================");
});
