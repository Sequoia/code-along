var EventEmitter = require('events');
var ee = new EventEmitter();
var messages = [];

ee.on('message', function logMessage(msg){
  console.log('new message: ' + msg.text);
});

ee.on('message', function collectMessage(msg){
  messages.push(msg);
});

ee.emit({ text : 'hello!', sender: 'sequoia'});
ee.emit({ text : 'world!', sender: 'sequoia'});
