var app = require('express')();
var restaurantRouter = require('./restaurantsSql');
//var restaurantRouter = require('./restaurantsMongo');

//config
app.set('view engine', 'jade');
app.set('views', 'templates');

app.get('/', function(req, res, next){
  res.render('homepage');
});

app.use('/restaurants', restaurantRouter);

app.listen(3000);

