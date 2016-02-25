var Restaurant = require('../mongoose-restaurants');
var bodyParser = require('body-parser');

var router = require('express').Router();
module.exports = router;

//middleware
router.use(bodyParser.urlencoded());

//dummy data for testing views
dummyData = [
  { name : 'McDougle\'s', founded: 1999, Dishes:
    [
      { name: 'French Fries', spicy : false } 
    ]
  }
];

//ROUTES//

// GET restaurants
router.get('/', function getList(req, res, next){
  console.log('getting restaurants/');
  Restaurant
    .find().exec()
    .then(function(results){
      res.render('restaurant_list', {restaurants : results});
    });
});

// GET single restaurant
router.get('/:id', function getOne(req, res, next){
  console.log('getting restaurants/' + req.params.id);

  Restaurant
    .findOne({
      _id : req.params.id
    })
    .exec()
    .then(function(result){
      console.log(result);
      res.render('restaurant_detail', result);
    });
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
  
  Restaurant
    .create(newRestaurant)
    .then(function(result){
      res.redirect('/restaurants/' + result._id);
    });
});
