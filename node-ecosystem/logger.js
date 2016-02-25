module.exports = function(prefix){
  function format(msg){
    return prefix + ' <' + Date() + '> ' + msg;
  }

  return {
    l : function(msg){ console.log(format(msg)); },
    e : function(msg){ console.error(format(msg)); },
  };

};
