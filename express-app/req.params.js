var server = require('express')();

server.get('/:foo', function(req, res){
  res.send(':foo is... ' + req.params.foo);
});

server.listen(3000);

