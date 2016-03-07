var express = require('express');
var app = express();
var path = require('path');
var port= 3000;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname,'./templates'));

app.get('/', function(req, res, next){
  res.render('homepage');
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});

