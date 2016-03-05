var fs = require('fs');

readFile('letter.txt')
  .then(print, handleError);

function readFile(filename){
  return new Promise(function(resolve, reject){
    fs.readFile(filename, 'utf-8', function(err, data){
      if(err){ reject(err); }
      else{ resolve(data); }
    });
  });
}

function print(text){
  console.log(text);
}
function handleError(err){
  console.error('ERROR');
  console.error(err);
}
