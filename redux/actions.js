require('isomorphic-fetch');


exports.getRestaurant = function(long, lat) {
  var options = {
    base_url: 'https://api.foursquare.com/v2/venues/search?'
    coords: 'll=' + long + ',' + lat;

  }
  return function(dispatch) {

  }
}
