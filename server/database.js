const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/REI_Related', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoosed-d!');
});

const sellingPointSchema = mongoose.Schema({
  productID: Number,
  sellingPoint: String,
});

const descriptionSchema = mongoose.Schema({
  productID: Number,
  description: Array,
});

const techSpecSchema = mongoose.Schema({
  productID: Number,
  specs: [],
});

const itemsSchema = mongoose.Schema({
  productID: Number,
  product: String,
  ratingPercentage: Number,
  ratings: Number,
  price: Number,
  sale: Boolean,
  salePrice: Number,
});

const SellingPoints = mongoose.model('SellingPoints', sellingPointSchema);
const Description = mongoose.model('Description', descriptionSchema);
const TechSpecs = mongoose.model('TechSpecs', techSpecSchema);
const Items = mongoose.model('Items', itemsSchema);

module.exports = {
  SellingPoints,
  Description,
  TechSpecs,
  Items,
};
