var mongoose = require('mongoose');
//use bluebird promises impl (mongoose impl is limited)
mongoose.Promise = require('bluebird');
var debug = require('debug')('mongo:connection');

if(!process.env.hasOwnProperty('MONGOURI')){
  console.error('Need MONGOURI environment variable');
  console.error('mongodb://<dbuser>:<dbpassword>@<host>:<port>/<dbname>');
  throw new Error('MONGOURI environment variable must be set!!');
}

//connect
debug('attempting to connect to ', process.env.MONGOURI);
mongoose.connect(process.env.MONGOURI);

//get DB event emitter to handle connection events
//also, EXPORT the db object
var db = module.exports = mongoose.connection;

//handle connection error
db.on('error', function(e){
  console.error('connection error:');
  console.error(e.code);
  console.error(e.message);
});

//connection succeeded:
db.once('open', function() {
  debug('mongo db connection successful');
});

