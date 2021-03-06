const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const planetsRoutes = require('./routes/planets.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* API ENDPOINTS */
app.use('/api', planetsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/celestial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', (err) => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
