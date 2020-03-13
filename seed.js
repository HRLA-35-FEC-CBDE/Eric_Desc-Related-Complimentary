const faker = require('faker');
const Models = require('./server/database.js');

var productsSellingPoint = [];
var productsDescription = [];
var productsSpecs = [];
var producstItems = [];

for (var i = 0; i < 100; i++) {
  productsSellingPoint.push({
    productID: i,
    sellingPoint: faker.fake('{{lorem.sentences}}'),
  });

  productsDescription.push({
    productID: i,
    description: faker.fake('{{lorem.paragraphs}}'),
  });

  // console.log(faker.fake('{{random.number}}'));

  producstItems.push({
    productID: i,
    product: faker.fake(
      '{{commerce.productMaterial}} {{commerce.productName}}'
    ),
    ratingPercentage: Math.random() > 0.37 ? (Math.random() * 25) + 75 :
  });
}

// const itemsSchema = mongoose.Schema({
//   productID: Number,
//   product: String,
//   ratingPercentage: Number,
//   ratings: Number,
//   price: Number,
//   sale: Boolean,
//   salePrice: Number,
// });
