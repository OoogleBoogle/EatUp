var actions = require('./actions');
var update = require('react-addons-update');


var initialState = [{
  url: null,
  photo: null,
  name: null,
  formattedAddress: null,
  city: null,
  rating: null
}];

exports.restaurantReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.GET_RESTAURANT_SUCCESS) {
    console.log(action.data.groups[0].items[0].venue)

    var newState = update(state, {0: {
      $set: {
        url: action.data.groups[0].items[0].venue.url,
        photo: action.data.groups[0].items[0].venue.photos.groups[0],
        name: action.data.groups[0].items[0].venue.name,
        formattedAddress: action.data.groups[0].items[0].venue.location.formattedAddress,
        city: action.data.groups[0].items[0].venue.location.city,
        rating: action.data.groups[0].items[0].venue.rating
      }
    }})
    console.log(newState);
    return newState;
  }
  else if (action.type === actions.GET_RESTAURANT_ERROR) {
    console.log(action.err.response.status);
  }
}
