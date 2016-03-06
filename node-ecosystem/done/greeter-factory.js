module.exports = function greetHandlerFactory(msg){
  return function(request, response){
    response.write(msg);
    response.end();
  };
};
