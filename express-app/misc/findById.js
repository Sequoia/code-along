module.exports = findById;

function findById(collection, id){
  return collection.filter(function(item){
    return item.id && (String(item.id) === id || item.id === Number(id));
  })[0] || null;
}
