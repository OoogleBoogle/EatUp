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
  render: function() {
    //TODO: if the textboxes are all filled out, diabled = false
    return (
      <div className="container">
        <h1>
          EatUp
        </h1>
        <p>Go meet up and eat up!</p>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
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
