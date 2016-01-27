var mongoose = require('mongoose');
var onConnect = require('./app');

//configuration
//mongodb://admin:adminpw@ds051625.mongolab.com:51625/node-training
var user = 'admin';
var pass   = 'adminpw';
var host = 'ds051625.mongolab.com:51625';
var database = 'node-training';
var mongoURI = 'mongodb://' + user + ':' + pass + '@' + host + '/' + database;

//connect
console.log('attempting to connect to ', mongoURI);
mongoose.connect(mongoURI);

//get DB event emitter to handle connection events
var db = mongoose.connection;

//handle connection error
db.on('error', function(e){
  console.error('connection error:');
  console.error(e.code);
  console.error(e.message);
});

//connection succeeded:
//we may now use the mongoose object
db.once('open', function() {
  console.log('mongo db connection successful');
  onConnect(mongoose);
});


