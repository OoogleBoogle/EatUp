var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../redux/actions/user.js');

var Form = React.createClass({
  preventRefresh: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <form onSubmit={this.props.getRestaurants} class="restaurantSearch">
        <div>
          <input type="text" ref="firstName" placeholder="First name"></input>
          <input type="text" ref="lastName" placeholder="Last name"></input>
        </div>
        <div>
          <input type="text" ref="email" placeholder="Enter your email..."></input>
        </div>
        <div>What do you want to eat today?</div>
        <select id="foodType">
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
    var disabled = true;
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
