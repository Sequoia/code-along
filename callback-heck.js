function self  (x, cb) { cb(null, x); }
function addOne(x, cb) { cb(null, 1 + x); }
function double(x, cb) { cb(null, 2 * x); }

var startVal = 2;

self(startVal, function (err, selfed){

  addOne(selfed, function (err, oneAdded){

    double(oneAdded, function (err, doubled){

      console.log(doubled); //outputs 6

    });

  });

});

