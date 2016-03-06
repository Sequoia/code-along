var app = require('express')();
var port= 3000;
//restaurants collection:
var restaurants = require('../restaurants.json');
var findById = require('../misc/findById');

// @TODO:
// GET restaurants/1 replys with...
// Restuarant 1: Amici's
// GET restaurants/2 replys with...
// Restuarant 2: Taco Gong

app.get('/:name', function (req, res) {
  res.send('Hello, ' + req.params.name);
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
  console.log('with name: http://localhost:' + port + '/Sequoia');
});
