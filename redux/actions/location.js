var SAVE_LOCATION = 'SAVE_LOCATION';
var saveLocation = function(long, lat) {
  return {
    type: SAVE_LOCATION,
    long: long,
    lat: lat
  }
}


exports.SAVE_LOCATION = SAVE_LOCATION;
exports.saveLocation = saveLocation;
