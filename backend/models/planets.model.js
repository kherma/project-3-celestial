const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  atmosphere: { type: Array, required: true },
  description: { type: String, required: true },
  distanceFromSun: { type: Number },
  name: { type: String, required: true },
  numberSize: { type: Number, required: true },
  ozoneLayer: { type: Boolean, required: true },
  population: { type: Number, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  temperature: { type: Number, required: true },
});

const planetStylesSchema = new mongoose.Schema({
  background: { type: String, required: true },
  boxShadow: { type: String, required: true },
  transform: { type: String, required: true },
});

const ringsStylesSchema = new mongoose.Schema({
  borderBottom: { type: String },
  borderLeft: { type: String },
  borderRight: { type: String },
  borderTop: { type: String },
  transform: { type: String },
  show: { type: Boolean, required: true },
});

const stylesSchema = new mongoose.Schema({
  planet: planetStylesSchema,
  rings: ringsStylesSchema,
});

const planetSchema = new mongoose.Schema({
  data: dataSchema,
  styles: stylesSchema,
});

module.exports = mongoose.model('Planet', planetSchema);
