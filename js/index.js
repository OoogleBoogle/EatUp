// var React = require('react');
// var ReactDOM = require('react-dom');

// var getLocation = document.getElementById("location");
// var requestLocation = function() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(useGeoData);
//   }
// };

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(routes, document.getElementById('app'));
// });



window.onload = function() {
  console.log('function called');
  var startPos;
  var geoOptions = {
     timeout: 10 * 1000
  }

  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').value = startPos.coords.latitude;
    document.getElementById('startLon').value = startPos.coords.longitude;
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};
