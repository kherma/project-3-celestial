const express = require('express');
const router = express.Router();
const planetSeed = require('../utils/seed');
const Planet = require('../models/planets.model');

router.get('/planets', async (req, res) => {
  try {
    const result = await Planet.find().select(
      'styles data.name data.size data.price data.numberSize'
    );
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/random', async (req, res) => {
  try {
    const result = new planetSeed();
    result.generatePlanet();
    res.json({ data: result.data, styles: result.styles });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/planets/:id', async (req, res) => {
  try {
    const result = await Planet.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
