function self  (x, cb) { cb(null, x); }
function addOne(x, cb) { cb(null, 1 + x); }
function double(x, cb) { cb(null, 2 * x); }

var startVal = 2;

self(startVal, processSelfed);

function processSelfed(err, selfed){
  addOne(selfed, processSum);
}

function processSum(err, oneAdded){
  double(oneAdded, outputResults);
} 

function outputResults(err, doubled){
  if(err){ return console.error(err); }
  console.log(doubled); //outputs 6
}
