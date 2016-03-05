var fs = require('fs');

var filename = 'letter.txt';

fs.readFile(filename, callback);

function callback(err, data){
  //if err, console.error(err)
  //else console.log file contents
}
