var express = require('express');
var app = express();
var path = require('path');
var port= 3000;

app.use('/', express.static(path.join(__dirname, '../assets')));

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
