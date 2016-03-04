var helloWorld = function hello(){
  console.log('Hello World!');
};

function run(fn){
  console.log('RUNNING FUNCTION: ' + fn.name);
  fn();
}

run(helloWorld);
