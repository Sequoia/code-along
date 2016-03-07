var Router = require('express').Router;
var router = module.exports = Router();
var bodyparser = require('body-parser');

var findById = require('../misc/findById');
var restaurants = require('../restaurants.json');

router.use(bodyparser.json());

router.get('/:id', function(req, res){
  //TODO update to use template engine
  //TODO create `restuarant.jade` template
  res.json(findById(restaurants, req.params.id));
});

router.get('/', function(req, res){
  res.json(restaurants);
});

router.post('/', function(req, res){
  restaurants.push(req.body);
  res.json(restaurants);
});
