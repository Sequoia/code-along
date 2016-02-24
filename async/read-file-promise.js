var fs = require('fs');

function print(text){
  console.log(text);
}
function handleError(err){
  console.error('ERROR');
  console.error(err);
}

readFile('letter.txt')
  .then(print, handleError);

function readFile(filename){
  //return a promise
}
