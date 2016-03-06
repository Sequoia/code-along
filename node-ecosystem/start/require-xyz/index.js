//(this file):
// node-ecosystem/start/require-xyz/index.js
//
//REQUIRE the following files:
// node-ecosystem/start/require-xyz/x.js
// node-ecosystem/start/require-xyz/y.js
//
//REQUIRE the following directory: 
// node-ecosystem/start/require-xyz/a/b/

var restaurants = []; /* replace [] with contents of /node-ecosystem/restaurants.json
                         using REQUIRE */

restaurants.forEach(function(restaurant){
  console.log(restaurant.name);
});
