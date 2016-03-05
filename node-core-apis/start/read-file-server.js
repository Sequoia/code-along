var fs = require('fs');
var server = require('http').createServer();
var path = require('path');
var filepath = path.resolve(__dirname, 'where is index.html relative to __dirname??', 'index.html');

console.log(filepath); //should output full path to index.html

//server.on('request', ...
//  read file
//  write response
//  console.error on error

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
