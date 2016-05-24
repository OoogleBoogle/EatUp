var store = require('./store');
var actions = require('./actions/restaurant');
var long = '37.7890387';
var lat = '-122.41610359999999'

store.dispatch(actions.getRestaurant(long, lat, 'Korean'));
var store = store.getState();
console.log(store);
