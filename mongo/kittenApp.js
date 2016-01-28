var db = require('./mongoConnection');
var debug = require('debug')('mongo:kitten');
var Kitten = require('./models/kitten');

db.once('open', run);

function run(){
  //this function is called with a the mongoose object
  //after SUCCESSFUL CONNECTION

  //create model instance
  var kitkat = new Kitten({
    name: 'Kit-Kat 123'
  });

  //access data & methods
  debug(kitkat.name); // 'Kit-Kat'
  debug(kitkat.speak()); //'Meow my name is Kit-Kat'

  ///////save the instance//////
  //save returns promise
  kitkat.save()
    .then(handleSave)
    .catch(logError);

  /////////query the collection///////
  //Kitten.find(function(err, kittens){
    //if(err) return console.error(err);
    //debug(kittens);
  //});

  ////////use promises for query results////////
  //1. create a query
  var query = Kitten.find();

  //2. call `exec` on query
  query.exec()
    .then(logKittens)
    .catch(logError);

  //////delete an instance from the DB////
  kitkat.remove()
    .then(function(kitty){
      debug('removed ' + kitty.name);
    })
    .catch(logError);
}

function handleSave(response){
  console.log('saved');
  debug('saved ' + response.toString() );
}

function logKittens(kittens){
  kittens.forEach(function(kitten){
    debug('got kitten: ' + kitten);
  });
}

function logError(e){
  console.error('application error');
  console.error(e);
}
