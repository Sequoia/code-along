var Router = require('express').Router;
var router = module.exports = Router();

var findById = require('../misc/findById');
var restaurants = require('../restaurants.json');

router.get(':id', function(req, res){
  res.json(findById(restaurants, req.params.id));
});

router.get('/', function(req, res){
  res.json(restaurants);
});
