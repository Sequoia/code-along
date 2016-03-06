var express = require('express');
var server  = express();
var port    = 3000;

var count = 0;

server.get('/greet', handleGreet);
server.get('/count', getCount);
server.post('/count', incrementCount);
server.delete('/count', resetCount);

function getCount(req, res){
  res.send(count);    
  //res.json({count: count});    
}

function incrementCount(req, res){
  count++;
  res.send(count);    
  //res.json({count: count});    
}

function resetCount(req, res){
  count = 0;  
  res.status(204).end();
}

function handleGreet(req, res) {
  res.json('Hello, you!');
}

server.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
