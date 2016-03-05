var server = require('http').createServer();

/* !! Attach myRequestHandler to server `request` event !! */

function myRequestHandler(request, response){
  //if /found
  //  statusCode 200, you found it
  //else
  //  statusCode 404, not found :(
}

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
