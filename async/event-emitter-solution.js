var EventEmitter = require('events');
var ee = new EventEmitter();

ee.on('count', function(num){
  console.log('number emitted: ', num);
});

ee.on('done', function(num){
  console.log('DONE');
  process.exit();
});

var count = 0;

setInterval(function increment(){
  count++;
  ee.emit('count', count);
  if(count >= 3){
    ee.emit('done');
  }
}, 1000);
