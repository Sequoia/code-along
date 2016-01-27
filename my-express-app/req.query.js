var server = require('express')();

// example: GET /?foo=bar
server.get('/', function(req, res){
  res.send('foo is... ' + req.query.foo);
});

server.listen(3000);
