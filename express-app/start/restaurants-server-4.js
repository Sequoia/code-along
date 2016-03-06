var app = require('express')();
var port= 3000;
var restaurantsRouter = require('./restaurants-router-4.js');

app.use('/restaurants', restaurantsRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function(){
  console.log('server listening http://localhost:' + port);
});
