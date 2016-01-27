var app = require('express')();

app.get(/nodejs/, function(req, res) {
  res.send('Your request path CONTAINED "nodejs"!');
});

//does not work! just use '/hello*'
//app.get(/^hello/, function(req, res) {
  //res.send('Your request path STARTED WITH "hello"!');
//});

app.get(/hello$/, function(req, res) {
  res.send('Your request path ENDED WITH "hello"!');
});

app.listen(3000);
