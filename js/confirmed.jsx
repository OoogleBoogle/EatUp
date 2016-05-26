var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../redux/actions/restaurant.js');

var ConfirmedPage = function() {
  console.log(this.props);
  return (
    <div class="confirmation">
      <p>You've been confirmed! As soon as we find a match, we'll let you know!</p>
    </div>
  )
};

module.exports = ConfirmedPage;
