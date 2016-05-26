var actions = require('../actions/user');
var update = require('react-addons-update');

var initialState = {
  confirmed: false, // placeholder value until we know exactly what we want here.
  firstName: null,
  lastName: null,
  email: null,
  foodType: null
};

exports.userReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.USER_SAVED) {
    var newState = update(state, {
      $set: {
        confirmed: true
      }
    });
    state = newState;
  }
  else if (action.type === actions.USER_NOT_SAVED) {
    console.log('==========USER_NOT_SAVED==========');
    var newState = update(state, {
      $set: {
        confirmed: false
      }
    });
    state = newState;
  }
  else if (action.type === actions.STORE_USER) {
    console.log('STORING USER');
    var newState = update(state, {
      $set: {
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        foodType: action.user.foodType
      }
    });
    state = newState;
  }
  return state;
}
