var express = require('express');
var app = express();
var path = require('path');
var port= 3000;

//TODO: setup template engine & tmpl location

app.get('/', function(req, res, next){
  //TODO: homepage route: render templates/homepage.jade
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});

