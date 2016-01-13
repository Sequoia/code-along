var https = require('https');
var url = require('url');

function getHeadersHTTPS(address){

  return new Promise(function(resolve, reject){

    var protocol = url.parse(address).protocol;
    if(protocol !== 'https:'){
      return process.nextTick(reject, new Error('address must be httpS'));
    }
    
    https.get(address)
      .on('response', function(response){
        //success! send `null` error and headers to callback
        resolve(response.headers);
      })
      .on('error', function(err){
        //error :( pass to callback
        reject(err);
      });
  });
}

var target = 'https://devdocs.io/';

getHeadersHTTPS(target)
  .then(function getDate(headers){
    return headers.date;
  })
  .then(function(date){
    console.log(date);
  });
