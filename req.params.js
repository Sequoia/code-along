var server = require('express')();

server.get('/:foo', function(req, res){
  res.send('Foo is... ' + req.params.foo);
});

server.listen(3000);
