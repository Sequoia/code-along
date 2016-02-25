var server = require('express')();

var users = [
  { name: 'Qian' },
  { name: 'Zeynep'},
  { name: 'Raisel'}
];

server.get('/users/:id', function(req, res){
  var id = req.params.id;
  var name = users[id].name;
  if(req.query.title){
    name = req.query.title + ' ' + name;
  }
  res.send('User ' + id + ': ' + name);
});

server.listen(3000);

//extra credit
server.get('/users/', function(req, res){
  var out = '';

  users.forEach(function(user, index){
    out += 'User ' + index + ': ' + user.name + '\n';
  });

  res.send(out);
});
