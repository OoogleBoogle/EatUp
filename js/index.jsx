var React = require('react');
var ReactDOM = require('react-dom');
var restaurantActions = require('../redux/actions/restaurant.js');
var userActions = require('../redux/actions/user.js');
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
var IndexRoute = router.IndexRoute;
var Link = router.link;
var Link = require('react-router').Link

var EatUp = React.createClass({
  componentDidMount: function() {
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
  getRestaurant: function(data) {
    console.log('getting restaurant', this.state);

    var latitude = parseInt(this.state.lat);
    var longitude = parseInt(this.state.long);
    var foodSelector = document.getElementById("foodType");
    var foodType = data.foodType;

    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      foodType: data.foodType
    });

    store.dispatch(restaurantActions.getRestaurant(longitude, latitude, foodType));
  },
  render: function() {
    //TODO: if the textboxes are all filled out, diabled = false
    return (
      <header>
        <h1>EatUp</h1>
        <p>Find dining companions near you!</p>
        <Form getRestaurant={this.getRestaurant} />
      </header>
    )
  }
});

var mapStateToProps = function(state, props) {
  console.log('hello');
  return {
    eatup: state
  };
};

var Container = connect(mapStateToProps)(EatUp);

var routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={EatUp}>
        <IndexRoute component={Container} />
        <Route path="/confirmationpage" component={ConfirmationPage} />
        <Route path="/confirmed" component={Confirmed} />
      </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        routes, document.getElementById('app')
    );
});
