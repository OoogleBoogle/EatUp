require('isomorphic-fetch');
var ids = require('./secrets.js')

exports.getRestaurant = function(long, lat) {
  var options = {
    base_url: 'https://api.foursquare.com/v2/venues/explore?',
    coords: 'll=' + long + ',' + lat,
    CLIENT_ID: '&client_id=' + ids.CLIENT_ID,
    CLIENT_SECRET: '&client_secret=' + ids.CLIENT_SECRET.
    limit: '&limit=1'
  }
  var url = options.base_url + options.coords + options.CLIENT_ID + options.CLIENT_SECRET + options.limit + 'v=20150501';
  return function(dispatch) {
    return fetch(url).then(function(result) {
      if (result.status < 200 || result.status >= 300) {
        var err = new Error(result.statusText);
        err.response = result;
        throw err;
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function(data) {
      // TODO: Process api result.
    })
  }
};

//https://api.foursquare.com/v2/venues/explore?ll=37.7890387,-122.41610359999999&client_id=V0WSPXBBDZJRJ2UNDN0QSKHG5LA2U1BEQH1KWUVNOFURT2HQ&client_secret=P14RQDZ4TS2OF5URP5RMMCLVJQZTM1YE2HX5XGB1JP0L1J2N&limit=1&v=20150501
