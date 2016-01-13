var EventEmitter = require('events');
var ee = new EventEmitter();

ee.on('count', function(num){
  console.log('number emitted: ', num);
});

var count = 0;

setInterval(function emitStrike(){
  count++;
  ee.emit('count', count);
}, 1000);
