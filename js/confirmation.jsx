var React = require('react');
var connect = require('react-redux').connect;
var store = require('../redux/store.js');
var actions = require('../redux/actions/user.js')

var ConfirmationPage = React.createClass({
  saveUser: function(event) {
    event.preventDefault();
    console.log('user being saveeeeed', this.props.eatup);
    var firstName = this.props.eatup.user.firstName;
    var lastName = this.props.eatup.user.lastName;
    var email = this.props.eatup.user.email;
    var foodType = this.props.eatup.user.foodType;

    var restaurantName = this.props.eatup.restaurant[0].name;
    var restaurantState = this.props.eatup.restaurant[0].state;
    var restaurantCity = this.props.eatup.restaurant[0].city;

    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      foodType: foodType,
      city: restaurantCity,
      state: restaurantState,
      restaurantName: restaurantName
    };

    console.log('the userrrr', user);

    this.props.dispatch(actions.saveUser(user));
  },
  render: function() {
    console.log('confirmation page infoz');
    return (
      <section>
        <h3>Confirmation Page</h3>
        <div>Almost there! What do you think of this restaurant? Please hit confirm if you'd like to eat there!</div>
        <div className="restaurantResult">
          <ul>
            <li>{this.props.eatup.restaurant[0].url}</li>
            <li>{this.props.eatup.restaurant[0].photo}</li>
            <li>{this.props.eatup.restaurant[0].name}</li>
            <li>{this.props.eatup.restaurant[0].formattedAddress}</li>
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
