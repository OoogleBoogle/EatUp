var actions = require('../actions/user');

var initialState = {
  confirmed: false
}

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
    var newState = update(state, {
      $set: {
        confirmed: false
      }
    });
    state = newState;
  }
  return state;
}
