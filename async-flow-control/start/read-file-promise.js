var fs = require('fs');

readFile('letter.txt')
  .then(print, handleError);

function readFile(filename){
  // return a promise
    // read file & resolve or reject
}

function print(text){
  console.log(text);
}
function handleError(err){
  console.error('ERROR');
  console.error(err);
}
