var http = require('http');

var visitorNumber = 0;

var server = http.createServer(function(request, response){
  visitorNumber++;

  if(visitorNumber == 5){
    response.write('CONGRATULATIONS!!');
  }else{
    response.write('Hello World!');
  }

  response.end();
});

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
