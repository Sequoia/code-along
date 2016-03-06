var app = require('express')();
var port = 3000;

app.get('/', function(req, res) {
  res.send('You requested the root path');
});

// /test/ => "you requested '/test/'"
// /test/[any number of characters] => "you requested '/test/something'"
// any other route: "you requested something else"

app.listen(port, function(){
  console.log('server listening on port ' + port);
});
