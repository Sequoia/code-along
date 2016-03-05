var fs = require('fs');
var server = require('http').createServer();
var path = require('path');
var filepath = path.resolve(__dirname, '..', 'index.html');

server.on('request', sendIndexHtml);

function sendIndexHtml(request, response){
  fs.readFile(filepath, 'utf-8', function(err, data){
    if(err){
      console.error(err);
      response.write('not found :(');
    }else{
      response.write(data);
    }
      response.end();
  });
}

server.listen(8080, function(){
  console.log('server listening at http://localhost:8080/');
});
