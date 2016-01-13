var EventEmitter = require('events');
var ee = new EventEmitter();

function exit (){
  console.log('all done!');
  process.exit(0);
}

ee.on('done', exit);

ee.on('count', function(num){
  console.log('number emitted: ', num);
  if(num >= 3){
    this.emit('done');
  }
});

var count = 0;

setInterval(function emitStrike(){
  count++;

  ee.emit('count');
}, 1000);
