var mongoose = require('mongoose');
//////// Schema & Model setup /////
//create a schema
var kittySchema = mongoose.Schema({
      name: String
});

//add methods to the schema
kittySchema.methods.speak = function () {
  return 'Meow my name is ' + this.name;
};

//create a model based on the schema
module.exports = mongoose.model('Kitten', kittySchema);
