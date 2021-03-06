var actions = require('../actions/restaurant');
var update = require('react-addons-update');

var initialState = [{
  url: null,
  photo: null,
  name: null,
  formattedAddress: null,
  city: null,
  state: null,
  rating: null,
  venue_id: null
}];

// currently only top restaurant result returned so only need to $set one objs params
exports.restaurantReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.GET_RESTAURANT_SUCCESS) {
    var venue = action.data.groups[0].items[0].venue // common location of needed params
    console.log("PHOTO? ", venue);
    var newState = update(state, {0: {
      $set: {
        url: venue.url,
        photo: venue.photos.groups[0].items[0].prefix + '100x100' + venue.photos.groups[0].items[0].suffix, 
        name: venue.name,
        formattedAddress: venue.location.formattedAddress, // array of full address, front end can loop for ease
        city: venue.location.city, // saving city seperatly for matching
        state: venue.location.state,
        rating: venue.rating,
        venue_id: venue.id
      }
    }})
    console.log(newState);
    state = newState;
  }
  else if (action.type === actions.GET_RESTAURANT_ERROR) {
    console.log(action.err.response.status); // only logging err at the moment
  }
  return state;
}
