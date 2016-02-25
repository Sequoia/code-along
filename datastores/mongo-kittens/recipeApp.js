var db = require('./mongoConnection');
var debug = require('debug')('mongo:recipe');
var Recipe = require('./models/recipe');

db.once('open', run);

function run(){

  //create model instance
  var tea = new Recipe({
    name: 'Black Tea',
    spicy: false,
    ingredients : [
      { name: 'tea', amount: '1', unit: 'bag'},
      { name: 'water', amount: '8', unit: 'ounces'}
    ]
  });
  
  debug('before: ', tea.ingredients);

  //update
  tea.ingredients.push({name: 'lemon', amount: 1, unit: 'slice'});
  tea.addIngredient(1, 'TBSP', 'milk')
    .save()
    .then(handleSave)
    .catch(logError);

  //query
  //Recipe.find().exec()
    //.then(logResults)
    //.catch(logError);

  //////delete an instance from the DB////
  setTimeout(function(){
    //set timeout so this doesn't run first!!
    tea.remove()
      .then(function(recipe){
        debug('removed ' + recipe._id);
      })
      .catch(logError);
  }, 1000);
}

function handleSave(response){
  debug('saved   ' + response._id );
}

function logResults(results){
  results.forEach(function(res){
    debug('got : ' + res);
  });
}

function logError(e){
  console.error('application error');
  console.error(e);
}

