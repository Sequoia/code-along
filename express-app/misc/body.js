var server = require('express')();
var bodyParser = require('body-parser');

server.use(bodyParser.json());

var users = [
  {"name":"joe"}
];

server.post('/', function(req, res){
  users.push(req.body);
  res.send(users);
});

server.listen(3000);
