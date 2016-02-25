var server = require('http').createServer();

server.on('request', myRequestHandler);

function myRequestHandler(request, response){
  if(request.url === '/found'){
    response.statusCode = 200;
    response.write('You found it!');
  }else{
    response.statusCode = 404;
    response.write('Not found! :(');
  }
  response.end();
}

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
