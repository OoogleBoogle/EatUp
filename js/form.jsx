var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../redux/actions/restaurant.js');

var router = require('react-router');
var Link = require('react-router').Link;
var Router = router.Router;
var Route = router.Route;

var store = require('../redux/store.js');
var restaurantActions = require('../redux/actions/restaurant.js');

var Form = React.createClass({
  componentDidMount: function() {
    var startPos;
    var geoOptions = {
       timeout: 10 * 1000
    }
    // var that = this;
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById("latitude").value = position.coords.latitude;
      document.getElementById("longitude").value = position.coords.longitude;
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
  preventRefresh: function(event) {
    event.preventDefault();
    // console.log('form', this.props.getRestaurant);
    // this.props.getRestaurant({
    //   firstName: this.refs.firstName.value,
    //   lastName: this.refs.lastName.value,
    //   email: this.refs.email.value,
    //   foodType: this.refs.foodType.value
    // });
    var firstName = this.refs.firstName.value;
    var lastName = this.refs.lastName.value;
    var email = this.refs.email.value;
    var latitude = this.refs.latitude.value;
    var longitude = this.refs.longitude.value;
    var foodSelector = document.getElementById("foodType");
    var foodType = foodSelector.value;

    // this.setState({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   foodType: data.foodType
    // });
    console.log(latitude, longitude, foodType);
    //console.log('getting restaurant', this.state);
    store.dispatch(restaurantActions.getRestaurant(longitude, latitude, foodType));
  },
  render: function() {
    return (
      <form onSubmit={this.preventRefresh} class="restaurantSearch">
        <input id="latitude" ref="latitude" type="text"></input>
        <input id="longitude" ref="longitude" type="text"></input>
        <div>
          <input type="text" ref="firstName" placeholder="First name"></input>
          <input type="text" ref="lastName" placeholder="Last name"></input>
        </div>
        <div>
          <input type="text" ref="email" placeholder="Enter your email..."></input>
        </div>
        <div>What do you want to eat today?</div>
        <select ref="foodType" id="foodType">
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
          <option value="mexican">Mexican</option>
          <option value="thai">Thai</option>
          <option value="japanese">Japanese</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="ethiopian">Ethiopian</option>
          <option value="french">French</option>
          <option value="korean">Korean</option>
          <option value="russian">Russian</option>
          <option value="mediterranean">Mediterranean</option>
        </select>
        <FormButton text="Let's eat up!"/>
      </form>
    );
  }
});

var FormButton = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <button type="submit">{this.props.text}</button>
    )
  }
});

var mapStateToProps = function(state, props) {
  return {
    eatup: state
  };
};

var Container = connect(mapStateToProps)(Form);

module.exports = Container;
