var async = require('async');
var columns = require('columns').create();
var shuffle = require('lodash').shuffle;
var chalk = require('chalk');

//hack to keep process running; enter ^c to quit
process.stdin.resume();

//"tasks" with various completion times (time on CPU)
var tasks = [ 1, 1, 1, 1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 200,
  200, 200, 200, 200, 200, 200, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000,
  2000, 2000, 2000, 5000, 5000 ];

tasks = shuffle(tasks);

//functions to run different types of SIMULATIONS
var runBlocking = makeColumn('eachSeries', 'Blocking, 1 thread', 'red', tasks);
var numThreads = 5;
var runThreaded = makeColumn('eachLimit', 'Blocking, '+numThreads+' threads', 'blue', tasks, numThreads);
var runEventLoop= makeColumn('each', 'EventLoop (async i/o)', 'green', tasks);

//kick off the tasks, 3 ways
//start by just running the first then uncomment each next one
runBlocking();
runThreaded(3);
runEventLoop();

function makeColumn(asyncMethod, label, color, tasks, additionalAsyncArgs){
  //return "run" function
  return function run(){
    var column = columns.addColumn(label);
    var startTime = Date.now();

    //build args for async
    var args = [tasks];
    if(additionalAsyncArgs){
      args = args.concat(additionalAsyncArgs);
    }
    args = args.concat(function eachFn(ms, next){
      setTimeout(function(){
        column.write(chalk[color]('Completed task: ' + ms + 'ms\n'));
        next();
      }, ms);
    });
    args = args.concat(function finishedFn(){
      var endTime = Date.now() - startTime;
      column.write(chalk.bold.underline[color]('ALL DONE IN ' + endTime + 'ms')+'\n');
    });

    async[asyncMethod].apply(async, args);
  };
}
