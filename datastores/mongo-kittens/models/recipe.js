var mongoose = require('mongoose');


//schema//
var ingredientSchema = mongoose.Schema({
  name: String,
  amount: Number,
  unit: String
});

var recipeSchema = mongoose.Schema({
  name: String,
  spicy: Boolean,
  ingredients: [ingredientSchema]
});


//methods//
recipeSchema.methods.addIngredient = function(amt, unit, name){
  this.ingredients.push({
    name: name,
    amount: amt,
    unit: unit
  });
  return this;
};
//kittySchema.methods.speak = function () {
  //return 'Meow my name is ' + this.name;
//};

//model//
module.exports = mongoose.model('Recipe', recipeSchema);
