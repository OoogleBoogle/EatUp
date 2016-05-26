var store = require('./store');
var RESactions = require('./actions/restaurant');
var USRactions = require('./actions/user');
var long = '37.7890387';
var lat = '-122.41610359999999'

store.dispatch(RESactions.getRestaurant(long, lat, 'Korean'));
store.dispatch(USRactions.saveUser({
  firstName: 'Terry',
  lastName: 'TheBuilder',
  email: 'nope@getfuked.com',
  foodType: 'Tea'
}));
var store = store.getState();
console.log(store);
