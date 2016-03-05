var EventEmitter = require('events');
var ee = new EventEmitter();
var count = 0;

setInterval(function increment(){
  count++;
  //emit increment event with new count
}, 1000);

//?? listen for count event & log ??//
