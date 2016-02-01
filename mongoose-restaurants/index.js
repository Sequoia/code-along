var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var createDummyData = require('./createDummyData');

//var mongouri = 'mongodb://username:password@host:51625/db-name'; //hardcoded
var mongouri = process.env.MONGOURI; //set in process.env
mongoose.connect(mongouri);

//handle connection error
mongoose.connection.on('error', function(e){
  console.error(e);
});

//schema//
var dishSchema = mongoose.Schema({
  name: String,
  spicy: Boolean
});

var restaurantSchema = mongoose.Schema({
  name: String,
  founded: Number,
  Dishes: [ dishSchema ]
});

//model//
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

createDummyData(Restaurant);

module.exports = Restaurant;
