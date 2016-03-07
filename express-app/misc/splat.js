var server = require('express')();

server.get('*', function(req, res, next) {
  res.send('you requested something else');
  next();
});

server.get('/test', function(req, res) {
  res.send('you requested /test');
});

server.listen(3000);
