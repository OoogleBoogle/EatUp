var React = require('react');
var ReactDOM = require('react-dom');
var userLocation = {};
var Confirmation = require('./confirmation.jsx');
var Form = require('./form.jsx');
var Confirmed = require('./confirmed.jsx');

var EatUp = React.createClass({
  componentDidMount: function() {
    console.log('function called');
    var startPos;
    var geoOptions = {
       timeout: 10 * 1000
    }
    var that = this;
    var geoSuccess = function(position) {
      startPos = position;
      that.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
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
  },
  getRestaurant: function(event) {
    event.preventDefault();
    console.log(event.target);
    console.log('getRestaurant', userLocation);
    var latitude = parseInt(this.state.lat);
    var longitude = parseInt(this.state.long);
    var foodSelector = document.getElementById("foodType");
    var foodType = foodSelector.value;
    console.log('foodtype', foodType);
    console.log('lat', latitude);
    console.log('long', longitude);
    this.props.dispatch(actions.getRestaurant(latitude, longitude, foodType));
  },
  saveUser: function(event) {
    event.preventDefault();
    var firstName;
    var lastName;
    var email;
    var foodType;
    this.props.dispatch(actions.saveUser(firstName, lastName, email, foodType))
  },
  render: function() {
    //TODO: if the textboxes are all filled out, diabled = false
    return (
      <header>
        <h1>EatUp</h1>
        <p>Find dining companions near you!</p>
        <Form getRestaurants={this.getRestaurant} />
      </header>
    )
  }
});

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<EatUp />, document.getElementById('app'));
});
