// server-with-module.js
// GET /
// ==> 'Hello World!'

var http = require('http');
var factory = require('./greeterFactory');
var handler = factory('Hello World!');

var server = http.createServer(handler);

server.listen(8080);
