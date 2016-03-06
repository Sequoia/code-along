var app = require('express')();
var findById = require('../misc/findById');
var port= 3000;
var restaurants = require('../restaurants.json');

app.get('/restaurants/:id', function(req, res){
  //TODO: update to send JSON
  var restaurant = findById(restaurants, req.params.id);
  res.send('Restuarant ' + restaurant.id + ': ' + restaurant.name);
});

//TODO: all restaurants json route

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
