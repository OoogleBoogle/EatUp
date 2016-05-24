var store = require('./store');
var actions = require('./actions');
var long = '37.7890387';
var lat = '-122.41610359999999'

store.dispatch(actions.getRestaurant(long, lat));
store.getState();
