var app = require('express')();
var findById = require('../misc/findById');
var port= 3000;
var restaurants = require('../restaurants.json');

app.get('/restaurants/:id', function(req, res){
  var restaurant = findById(restaurants, req.params.id);
  res.send('Restuarant ' + restaurant.id + ': ' + restaurant.name);
});

app.get('/:name', function (req, res) {
  res.send('Hello, ' + req.params.name);
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
  console.log('with name: http://localhost:' + port + '/Sequoia');
});
