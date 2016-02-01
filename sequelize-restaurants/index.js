//// CONFIG /////
var dbname = 'test2';
var dbuser = 'root';https://strongloop.com/strongblog/build-real-time-apps-with-angular-liveset-and-loopback/
var dbpass = '';
var dbhost = 'localhost';
var dbtype = 'mariadb';
////CONFIG///////

//connection setup
var Sequelize = require('Sequelize');
var createDummyData = require('./createDummyData');

var db = new Sequelize(dbname, dbuser, dbpass, {
  host: dbhost,
  dialect: dbtype,
});

//models//
var Restaurant = db.define('Restaurant', {
  name: { type: Sequelize.STRING, },
  founded: { type: Sequelize.INTEGER }
});

var Dish = db.define('Dish', {
  name: { type: Sequelize.STRING, },
  spicy: { type: Sequelize.BOOLEAN }
});

//relationships
Restaurant.hasMany(Dish);

//run db model setup.
//force:true adds DROP TABLE to each definition, used for testing/demoing
db.sync({force: true})
  .then(function(r){
    //add some records
    return createDummyData(Restaurant, Dish);
  });


module.exports = {
  Restaurant : Restaurant,
  Dish       : Dish
};
