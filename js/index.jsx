var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('../redux/actions/restaurant.js');
var actions = require('../redux/actions/user.js');
var Provider = require('react-redux').Provider;
var store = require('../redux/store.js');

var ConfirmationPage = require('./confirmation.jsx');
var Form = require('./form.jsx');
var Confirmed = require('./confirmed.jsx');

var connect = require('react-redux').connect;

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

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

    var firstName = this.refs.firstName.value;
    var lastName = this.refs.lastName.value;
    var email = this.refs.email.value;
    var latitude = parseInt(this.state.lat);
    var longitude = parseInt(this.state.long);
    var foodSelector = document.getElementById("foodType");
    var foodType = foodSelector.value;

    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      foodType: foodType
    });

    console.log(event.target);
    console.log('getRestaurant', userLocation);

    console.log('foodtype', foodType);
    console.log('lat', latitude);
    console.log('long', longitude);
    this.props.dispatch(actions.getRestaurant(longitude, latitude, foodType));
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

var mapStateToProps = function(state, props) {
  return {
    eatup: state
  };
};

var Container = connect(mapStateToProps)(EatUp);

var routes = (
  <Router history={hashHistory}>
    <Route path="/form" component={EatUp} />
    <Route path="/ConfirmationPage" component={ConfirmationPage} />
    <Route path="/Confirmed" component={Confirmed} />
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <Provider store={store}>
        <EatUp />
      </Provider>, document.getElementById('app')
    );
});
