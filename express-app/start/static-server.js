var express = require('express');
var app = express();
var path = require('path');
var port= 3000;

//TODO: set up static server to serve ../assets/

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
