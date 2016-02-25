module.exports = function(dogNoise, catMethods){

  function Cat(){}
  function Dog(){}
  Dog.prototype.bark = function(){ console.log(dogNoise); };

  catMethods.forEach(function(method){
    Cat.prototype[method.name] = method.fn;
  });

  var out = {
    Cat : Cat,
    Dog : Dog,
  };
  
  return out;
};

module.exports.version = '0.1.1';
