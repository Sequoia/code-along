var petmaker = require('./petMaker.js');

var catThings = [
  { name : 'meow', fn : function(){ console.log('Meow~~'); } }
];

var pets = petmaker('BAO!', catThings);

var dog = new pets.Dog();
var cat = new pets.Cat();

dog.bark();
cat.meow();
console.log(petmaker.version);
