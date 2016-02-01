//var Restaurant = require('../mongoose-restaurants');
var Restaurant = require('../sequelize-restaurants').Restaurant;
var Dish = require('../sequelize-restaurants').Dish;
var bodyParser = require('body-parser');

var router = require('express').Router();
module.exports = router;

//middleware
router.use(bodyParser.urlencoded());

//dummy data for testing views
dummyData = [
  { name : 'McDougle\'s', founded: 1999, dishes:
    [
      { name: 'French Fries', spicy : false } 
    ]
  }
];

//ROUTES//

// GET restaurants
router.get('/', function getList(req, res, next){
  console.log('getting restaurants/');
  
  var results = dummyData; //TODO get restaurants from DB

  res.render('restaurant_list', {restaurants : results});
});

// GET single restaurant
router.get('/:id', function getOne(req, res, next){
  console.log('getting restaurants/' + req.params.id);

  var result = dummyData[0]; //TODO use req.params.id to fetch real DB record

  res.render('restaurant_detail', result);
});

// GET new restaurant form
router.get('/new', function restaurantForm(req, res, next){
  res.render('restaurant_form');
});

// POST new restaurant
router.post('/', function create(req, res, next){
  console.log('creating new restaurant' , req.body);

  //whitelist fields
  var newRestaurant = {
    name: req.body.name,
    founded: req.body.founded
  };
  
  dummyData.push(newRestaurant); //TODO save restaurant to DB
  var newId = -1; //TODO get ID of new restaurant

  res.redirect('/restaurants/' + newId);
});
