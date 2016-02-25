var fs = require('fs');

var msg = "See you in San Francisco!";

var filename = 'letter.txt';

fs.writeFile(filename, msg, function(err){
  if(err) console.error('there was an error!', err);
  else console.log('file written successfully :)');
});

