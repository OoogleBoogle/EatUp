var React = require('react');

var ConfirmationPage = React.createClass({
  render: function() {
    return (
      <section>
        <h3>Confirmation Page</h3>
        <div>Almost there! What do you think of this restaurant? Please hit confirm if you'd like to eat there!"</div>
        <div className="restaurantResult">
        // information received from foursquare endpoint
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

module.exports = Container;
