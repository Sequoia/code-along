var app = require('express')();
var port = 3000;

app.get('/', function(req, res) {
  res.send('You requested the root path');
});

app.get('/test/', function(req, res) {
  res.send('You requested /test/');
});

app.get('/test/*', function(req, res) {
  res.send('You requested /test/something');
});

app.get('*', function(req, res) {
  res.send('You requested some other route...');
});

app.listen(port, function(){
  console.log('server listening on port ' + port);
});
