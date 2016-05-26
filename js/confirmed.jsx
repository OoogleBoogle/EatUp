var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../redux/actions/restaurant.js');

var ConfirmedPage = function() {
  return (
    <div className="confirmed">
      <p>You've been confirmed! As soon as we find a match, we'll let you know!</p>
    </div>
  )
};

module.exports = ConfirmedPage;
