require('./x.js');  // file: x.js
require('./y');     // file: y.js
require('./a/b');   // file: a/b/index.js

var restaurants = require('../../restaurants.json');

restaurants.forEach(function(restaurant){
  console.log(restaurant.name);
});
