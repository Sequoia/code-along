var fs = require('fs');

//fs.readFile('./test.txt', 'utf8', function processFile(err, data){
fs.readFile('./test.txt', function processFile(err, data){
  if( err ) throw err;

  console.log(data);
});
