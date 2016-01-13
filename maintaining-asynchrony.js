var https = require('https');
var url = require('url');

function getHeadersHTTPS(address, cb){

  //FIRES CB IMMEDIATELY (bad)
  //var protocol = url.parse(address).protocol;
  //if(protocol !== 'https:'){
    //return cb(new Error('address must be httpS'));
  //}

  //Fires cb on next turn of EventLoop
  var protocol = url.parse(address).protocol;
  if(protocol !== 'https:'){
    return process.nextTick(cb, new Error('address must be httpS'));
  }
  
  https.get(address)
    .on('response', function(response){
      //success! send `null` error and headers to callback
      cb(null, response.headers);
    })
    .on('error', function(err){
      //error :( pass to callback
      cb(err);
    });
}

var target = 'https://devdocs.io/';

getHeadersHTTPS(target , function(err, headers){
    if(err) return console.error('ERROR: ', err.message);
      console.log(headers);
});

console.log('\nCalled getHeadersHTTPS, standby for results...\n\n\n');
