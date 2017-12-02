const express  = require('express');
const mongoose = require('mongoose');
const app      = express();
const PORT     = 3000;

// Database connection
const mongoURI = 'mongodb://localhost:27017/photo_comments';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// Connection test
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

// Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('server is running');
});

// Listener
app.listen(PORT, () => {
  console.log("================");
  console.log("Listening...");
  console.log("================");
});
