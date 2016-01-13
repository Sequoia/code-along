var EventEmitter = require('events');
var ballgame = new EventEmitter();

ballgame.on('strike', function(count){
  console.log('Strike %d!', count);

  if(strikeCount >= 3){
    process.exit(0);
  }
});

ballgame.on('run', function(){
  strikeCount = 0;
  console.log('Hooray!');
});

var strikeCount = 0;

setInterval(function emitStrike(){
  strikeCount++;
  if(Math.random() > .5){
    ballgame.emit('run');
  }
  else{
    ballgame.emit('strike', strikeCount);
  }
}, 1000);
