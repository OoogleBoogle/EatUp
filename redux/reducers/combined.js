var combineReducers = require('redux').combineReducers;

var location = require('./location');
var restaurant = require('./restaurant').restaurantReducer;

var reducers = combineReducers({
  restaurant: restaurant,
	location: location
});

exports.combined = reducers;
