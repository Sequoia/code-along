var server = require('express')();

server.get('/', handleRoot);
server.get('/greet', handleGreet);
  
function handleRoot(req, res) {
  res.send('Hello World!');
}

function handleGreet(req, res) {
  res.send('Hello ' + req.query.name);
}

server.listen(3000);
