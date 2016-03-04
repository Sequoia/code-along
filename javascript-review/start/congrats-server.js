var http = require('http');

var server = http.createServer(/* handler function */);

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
