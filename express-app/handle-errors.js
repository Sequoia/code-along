// handle-errors.js
var app = require('express')();
var thrower = require('error-throwing-middleware');
var chalk = require('chalk');

var error = chalk.red.bold;
var info  = chalk.blue;

//app.use(thrower);
app.get('/', function(req, res, next){ res.send('hello world!'); });

/* 1. log in red for 500s */
/* 2. log in yellow for 404 */
/* 3. ensure status code is an HTTP code */

app.listen(3000, function(err){
  if(err){ console.error(error(err.message)); }
  else{ console.log(info('Server started on port 3000')); }
});

