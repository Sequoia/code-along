var express    = require('express')
var a1 = express();
var a2 = express();

a1.listen(3000, function(err){
  if(err){ console.error('a1 ERROR!!'); }
  else{ console.log('Server a1 started on port 3000'); }
});


a2.listen(3000, function(err){
  if(err){ console.error('a2 ERROR!!'); }
  else{ console.log('Server a2 started on port 3000'); }
});

