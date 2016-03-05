var EventEmitter = require('events');
var ee = new EventEmitter();
var counter = 0;

ee.on('increment', function(num){
  console.log('number emitted: ', num);
  //extra:
  if(counter >= 3){
    ee.emit('done');
  }
});

setInterval(function increment(){
  counter++;
  ee.emit('increment', counter);
}, 1000);

//extra:
ee.on('done', function(num){
  console.log('DONE');
  process.exit();
});
