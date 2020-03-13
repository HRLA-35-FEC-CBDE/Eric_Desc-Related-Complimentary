const Models = require('./server/database.js');

const prodcutsSellingPoint = [];
const productsDescription = [];
const productsSpecs = [];
const producstItems = [];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var specTitles = shuffle([
  'Aenean',
  'Vulputate',
  'Pharetra',
  'Odio',
  'Sed',
  'Urna',
  'Eu',
  'Enim',
  'Condimentum',
  'Aliquam',
  'Duis',
  'Felis',
  'Metus',
  'Sodales',
  'Viverra',
  'Quis',
]);

var sellingPoints = shuffle([
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Etiam hendrerit velit at sem sagittis tristique.',
  'Sed commodo eros eget pharetra iaculis.',
  'Proin vel neque convallis, pharetra velit ac, efficitur erat.',
  'Curabitur convallis mi vulputate leo vestibulum, vitae laoreet mauris tempus.',
  'Quisque cursus enim at arcu vulputate euismod.',
  'In consequat ante sit amet tellus sodales, vel fermentum arcu facilisis.',
  'Phasellus non odio mollis, feugiat mi ut, sollicitudin orci.',
  'Donec auctor sapien in pretium dictum.',
  'Fusce vel dui vel mauris ultrices aliquet a ac massa.',
  'Donec semper mi non libero feugiat facilisis.',
  'Sed scelerisque risus a nisl fermentum ullamcorper.',
  'Donec lacinia lorem eget orci sodales malesuada.',
  'Nunc laoreet risus ut gravida tristique.',
  'Maecenas a sem gravida, molestie lectus eget, bibendum orci.',
  'Integer interdum orci non nulla molestie, eget elementum tellus consequat.',
  'Donec consectetur urna in ipsum malesuada euismod.',
  'Morbi sit amet diam sit amet lorem aliquam consequat quis sed metus.',
  'Phasellus malesuada dolor nec tortor eleifend, a laoreet lorem bibendum.',
  'Pellentesque eget nisi vitae neque lobortis viverra sed at urna.',
  'Donec sed urna eget diam finibus convallis.',
  'Ut non enim iaculis, faucibus mauris sed, tempor metus.',
  'Praesent porta lorem vel urna placerat, ac lobortis felis fringilla.',
  'Pellentesque fringilla leo tincidunt magna accumsan feugiat.',
  'Ut maximus diam non varius iaculis.',
  'Ut a tellus eu libero blandit congue.',
  'Sed sit amet augue facilisis, dapibus ipsum cursus, porttitor sem.',
  'Morbi tempor eros sit amet tincidunt viverra.',
]);

const products = [
  'Snowboards',
  'Snowboarding Boots',
  'Snow Helmet',
  'Stomp Pad',
  'Snowboard Bag',
  'Insulated Gloves',
  'Beanie',
  'Snow Goggles',
  'Skis',
  'Poles',
  'Bindings',
];

for (var i = 0; i < 20; i++) {
  let currentSellingPoint = '';
  let currentDescription = [];

  for (var i = 0; i < Math.ceiling(Math.random() * 3); i++) {
    currentSellingPoint +=
      sellingPoints[Math.floor(Math.random() * sellingPoints.length - 1)];
  }

  let objSellingPoint = {
    productID: i,
    sellingPoint: currentSellingPoint,
  };

  for (var i = 0; i < Math.ceiling(Math.random() * 6) + 2; i++) {
    currentDescription.push(
      sellingPoints[Math.floor(Math.random() * sellingPoints.length - 1)]
    );
  }

  let objDescription = {
    productID: i,
    description: currentDescription,
  };

  // let objSpec = { productID: i };

  let sellingPrice = Math.random() * 120 + 75;

  let objItem = {
    productID: i,
    product: products[Math.random() * (products.length - 1)],
    ratingPercentage: Math.random() * 100,
    ratings: Math.random() * 41,
    price: sellingPrice,
    sale: Math.random() < 0.5 ? true : false,
    salePrice:
      Math.random() < 0.15 ? sellingPrice * Math.random() : sellingPrice,
  };
}
