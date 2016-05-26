var React = require('react');
var connect = require('react-redux').connect;
var store = require('../redux/store.js');
var actions = require('../redux/actions/user.js')

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = require('react-router').Link;
var hashHistory = router.hashHistory;


var ConfirmationPage = React.createClass({
  saveUser: function(event) {
    event.preventDefault();

    var user = {
      firstName: this.props.eatup.user.firstName,
      lastName: this.props.eatup.user.lastName,
      email: this.props.eatup.user.email,
      foodType: this.props.eatup.user.foodType,
      city: this.props.eatup.restaurant[0].city,
      state: this.props.eatup.restaurant[0].state,
      restaurantName: this.props.eatup.restaurant[0].name,
      venue_id: this.props.eatup.restaurant[0].venue_id
    };

    console.log('the userrrr', user);

    this.props.dispatch(actions.saveUser(user));
    hashHistory.push("/confirmed")
  },
  render: function() {
    console.log('confirmation page infoz', this.props.eatup.restaurant[0]);
    if (this.props.eatup.restaurant[0].formattedAddress != null) {
      var restaurantAddress = this.props.eatup.restaurant[0].formattedAddress.map(function(address, index) {
        return (
          <li>{address}</li>
        )
      })
    }

    return (
      <section className="confirmationPage">
        <h3>Confirmation Page</h3>
        <h4>Almost there! What do you think of this restaurant? Please hit confirm if you'd like to eat there!</h4>
        <div className="restaurantResult">
          <ul>
            <li>{this.props.eatup.restaurant[0].url}</li>
            <li>{this.props.eatup.restaurant[0].photo}</li>
            <li>{this.props.eatup.restaurant[0].name}</li>
            <li>{restaurantAddress}</li>
            <li>{this.props.eatup.restaurant[0].city}</li>
            <li>{this.props.eatup.restaurant[0].rating}</li>
          </ul>
        </div>
        <div>
          <ConfirmButton confirmFunction={this.saveUser} text="I'd eat that"/>
        </div>
      </section>
    );
  }
});

var ConfirmButton = React.createClass({
  render: function() {
    return (
      <button type="submit" onClick={this.props.confirmFunction}>{this.props.text}</button>
    )
  }
});

var mapStateToProps = function(state, props) {
  console.log('mapping state to props');
  return {
    eatup: state
  };
};

var Container = connect(mapStateToProps)(ConfirmationPage);

module.exports = Container;
