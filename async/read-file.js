var fs = require('fs');

var filename = 'letter.txt';

fs.readFile(filename, function(err, data){
  if(err){
    console.error('there was an error!', err);
  }
  else{
    console.log(data.toString());
  }
});
