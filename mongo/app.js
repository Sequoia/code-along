module.exports = function onConnection(mongoose){
//this function is called with a the mongoose object
//after SUCCESSFUL CONNECTION

//create a schema
var kittySchema = mongoose.Schema({
      name: String
});

//add methods to the model
kittySchema.methods.speak = function () {
  return 'Meow my name is ' + this.name;
};

//create a model based on the schema
var Kitten = mongoose.model('Kitten', kittySchema);

//create model instance
var kitkat = new Kitten({
  name: 'Kit-Kat'
});

//access data & methods
console.log(kitkat.name); // 'Kit-Kat'
console.log(kitkat.speak()); //'Meow my name is Kit-Kat'

//save the instance
kitkat.save(handleSave);

};

function handleSave(err, response){
  if(err) return console.log(err);
  console.log('saved ' + response.toString() );
}
