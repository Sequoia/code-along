var fs = require('fs');

var filename = 'letter.txt';

fs.readFile(filename, callback);

function callback(err, data){
  //if err, console.error(err)
  if(err){
    console.error('there was an error!', err);
  }
  //else console.log file contents
  else{
    console.log(data.toString());
  }
}
