var actions = require('../actions/location');
var update = require('react-addons-update');

var initialState = {
  long: null,
  lat: null
}

exports.locationReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SAVE_LOCATION) {
    var newState = update(state, {
      $set: {
        long: action.long,
        lat: action.lat
      }
    });
    state = newState;
  }
  return state;
}
