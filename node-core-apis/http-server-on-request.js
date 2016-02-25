var http = require('http');

var server = http.createServer();

server.on('request', myRequestHandler);

function myRequestHandler(request, response){
  response.write('Hello World!');
  response.end();
}

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
