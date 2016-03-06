var server = require('express')();

var startTime = Date.now();

server.use(function uptimeMiddleware(req, res, next){
  //get current uptime (now - server start time)
  //set it as header X-Server-Uptime
  res.set('X-Server-Uptime', Date.now() - startTime);
  //next
  next();
});

server.get('/', function(req, res){
  res.send('hello world');
});

server.listen(3000);

