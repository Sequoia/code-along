//use:
//  1. loggerMiddleware = require('/path/to/this-file.js')
//  2. app.use(loggerMiddleware);
module.exports = function log(req, res, next){
  console.log('%s: %s %s', Date(), req.method, req.path);
  next();
};
