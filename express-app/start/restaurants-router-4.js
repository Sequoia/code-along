////////////////////////////////////////
// SPOILER ALERT!!                    //
//                                    //
// This file is NOT for the 1st "make //
// router module" exercise!! create   //
// a new file & create router module  //
// yourself! (this is the solution to //
// that exercise)                     //
// This file is for the `POST`        //
// exercise                           //
////////////////////////////////////////

var Router = require('express').Router;
var router = module.exports = Router();

var findById = require('../misc/findById');
var restaurants = require('../restaurants.json');

router.get('/:id', function(req, res){
  res.json(findById(restaurants, req.params.id));
});

router.get('/', function(req, res){
  res.json(restaurants);
});

//TODO add POST path that takes restaurant json & adds it to collection
