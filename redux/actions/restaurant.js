require('isomorphic-fetch');
var ids = require('../secrets.js'); // seperate file for api ID's so not checked into github

// Api call to FourSquare API.
var getRestaurant = function(long, lat, foodType) {
  console.log('foursquare');
  var options = {
    base_url: 'https://api.foursquare.com/v2/venues/explore?', // using 'explore' endpoint over 'search', yealded better 'top' results.
    coords: 'll=' + long + ',' + lat,
    CLIENT_ID: '&client_id=' + ids.CLIENT_ID,
    CLIENT_SECRET: '&client_secret=' + ids.CLIENT_SECRET,
    limit: '&limit=1', // only get top result
    query: '&query=' + foodType,
    version: '&v=20150501' // required by FourSquare. Basically says use API version from 05/01/2015
                           // to prevent breakages if param names change on future API updates
  }
  console.log(options.CLIENT_SECRET);
  // concating instead of looping due to race condition probs
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
