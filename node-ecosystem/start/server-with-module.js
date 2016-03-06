// server-with-module.js
// GET /
// ==> 'Hello World!'

var http = require('http');
var factory = require('./greeter-factory');
var handler = factory('Hello World!');

var server = http.createServer(handler);

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
