var express = require('express');
var server  = express();
var port    = 3000;

server.get('/greet', handleGreet);
//count:
//  POST
//  GET
//  DELETE

function handleGreet(req, res) {
  res.json('Hello, you!');
}

server.listen(port, function(){
  console.log('server listening on port ' + port);
});
