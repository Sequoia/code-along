dblog   = require('./logger.js')('DATABASE');
httplog = require('./logger.js')('HTTP');

var dolog = !process.env.NO_LOGGERS;

if (dolog) dblog.l('testing 123');
if (dolog) dblog.e('testing 123');
if (dolog) httplog.l('testing 123');
if (dolog) httplog.e('testing 123');
