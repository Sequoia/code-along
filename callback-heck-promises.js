function self  (x, cb) { cb(null, x); }
function addOne(x, cb) { cb(null, 1 + x); }
function double(x, cb) { cb(null, 2 * x); }

function selfPromise(x){
  return new Promise(function(resolve, reject){
    resolve(x);
  });
}

var startVal = 2;

selfPromise(startVal)
  .then(function(selfed){
    return Promise(resolve, reject){
      addOne(
        //TODO: This is going to end up being too hard
