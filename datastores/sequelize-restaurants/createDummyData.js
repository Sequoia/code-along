module.exports = createRecords;
var Promise = require('bluebird');

function createRecords(Restaurant, Dish){
  return Promise.map(getRestaurants(), function(obj){
    return Restaurant.create(obj, { include : [ Dish ] });
  })
  .tap(function(){
    console.log('Created Restaurants');
  });
}

function getRestaurants(){
return [
  { name: 'Amici\'s', founded:2010, Dishes: [ 
      {name: 'Pancakes', spicy:false},
      {name: 'Tacos', spicy:true},
      {name: 'Ice Cream Sundae', spicy:false},
      {name: 'Tastee Conez', spicy:false},
      {name: 'Raisenettes', spicy:false},
      {name: 'Chicken Enchilada', spicy:true},
      {name: 'Waffles', spicy:false}
    ]
  },
  { name: 'Taco Gong', founded:2011, Dishes: [
      {name: 'Pancakes', spicy:false},
      {name: 'Tacos', spicy:true},
      {name: 'Chicken Enchilada', spicy:true},
      {name: 'Waffles', spicy:false},
      {name: 'Spicy Pickled eggs', spicy:true},
      {name: 'Sriracha Popcorn', spicy:true},
      {name: 'Ice Cream Tuesdae', spicy:false}
    ]
  },
  { name: 'Unfriendly\'s', founded:1999, Dishes: [
      {name: 'Chicken & Waffles', spicy:true},
      {name: 'Ice Cream Sundae', spicy:false},
      {name: 'Tastee Conez', spicy:false},
      {name: 'Raisenettes', spicy:false}
    ]
  },
  { name: 'Shake Hovel', founded:2001, Dishes: [
      {name: 'Red Hots', spicy:true},
      {name: 'Pickled eggs', spicy:false},
      {name: 'Spicy Pickled eggs', spicy:true},
      {name: 'Sriracha Popcorn', spicy:true},
      {name: 'Ice Cream Tuesdae', spicy:false}
    ] 
  },
  { name: 'Grey Castle', founded:1920, Dishes: [
      {name: 'General Tzo\'s Meatballs', spicy:true},
      {name: 'Pickled eggs', spicy:false},
      {name: 'Spicy Pickled eggs', spicy:true},
      {name: 'Sriracha Popcorn', spicy:true},
      {name: 'Ice Cream Sundae', spicy:false},
      {name: 'Tastee Conez', spicy:false},
      {name: 'Raisenettes', spicy:false}
    ]
  }
];
}
