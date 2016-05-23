var GET_RESTAURANT = 'GET_RESTAURANT';
var getRestaurant = function(long, lat) {
  return {
    type: GET_RESTAURANT,
    long: long,
    lat: lat
  }
}
