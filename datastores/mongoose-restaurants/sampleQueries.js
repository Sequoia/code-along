Restaurant.findAll()
  .then(function(results){
    results.forEach(function(restaurant){
      console.log(restaurant.id, restaurant.name);
    });
  });

Restaurant
  .find({
    where: {id : 1 },
    include: [ Dish ]
  })
  .then(function(restaurant){
    console.log(restaurant.id, restaurant.name, restaurant.Dishes.length);
  });
