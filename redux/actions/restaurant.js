require('isomorphic-fetch');
var ids = require('../secrets.js');

var getRestaurant = function(long, lat, foodType) {
  var options = {
    base_url: 'https://api.foursquare.com/v2/venues/explore?',
    coords: 'll=' + long + ',' + lat,
    CLIENT_ID: '&client_id=' + ids.CLIENT_ID,
    CLIENT_SECRET: '&client_secret=' + ids.CLIENT_SECRET,
    limit: '&limit=1',
    query: '&query=' + foodType
  }
  var url = options.base_url + options.coords + options.CLIENT_ID + options.CLIENT_SECRET + options.limit + options.query + '&v=20150501';
  return function(dispatch) {
    return fetch(url).then(function(result) {
      if (result.status < 200 || result.status >= 300) {
        var err = new Error(result.statusText);
        err.response = result;
        throw err;
      }
      return result;
    })
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      return dispatch(getRestaurantSuccess(data.response));
    })
    .catch(function(err) {
      return dispatch(getRestaurantError(err));
    })
  }
};

var GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
var getRestaurantSuccess = function(data) {
  return {
    type: GET_RESTAURANT_SUCCESS,
    data: data
   }
};


var GET_RESTAURANT_ERROR = 'GET_RESTAURANT_ERROR';
var getRestaurantError = function(err) {
  return {
    type: GET_RESTAURANT_ERROR,
    err: err
  }
};



exports.GET_RESTAURANT_SUCCESS = GET_RESTAURANT_SUCCESS;
exports.getRestaurantSuccess = getRestaurantSuccess;
exports.GET_RESTAURANT_ERROR = GET_RESTAURANT_ERROR;
exports.getRestaurantError = getRestaurantError;
exports.getRestaurant = getRestaurant;
