var combineReducers = require('redux').combineReducers;

var user = require('./user').userReducer;
var restaurant = require('./restaurant').restaurantReducer;

var reducers = combineReducers({
  restaurant: restaurant,
	user: user
});

exports.reducers = reducers;
