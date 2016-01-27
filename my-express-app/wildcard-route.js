var app = require('express')();

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

app.listen(3000);

