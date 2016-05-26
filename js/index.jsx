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
var Link = require('react-router').Link

var EatUp = React.createClass({
  getRestaurant: function(data) {
    var latitude = this.state.lat;
    var longitude = this.state.long;
    var foodSelector = document.getElementById("foodType");
    var foodType = data.foodType;

    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      foodType: data.foodType
    });
    console.log(latitude, longitude, foodType);
    console.log('getting restaurant', this.state);


    this.props.dispatch(restaurantActions.getRestaurant(longitude, latitude, foodType));
    console.log('getting restaurant');

  },
  render: function() {
    console.log('hi', this.props);
    //TODO: if the textboxes are all filled out, diabled = false
    return (
      <div>
        <h1>
          EatUp
        </h1>
        <p>Let us find a dining companion for you!</p>
        <div>
          {this.props.children}
        </div>
      </div>
    );
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
        <IndexRoute component={Form} />
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
