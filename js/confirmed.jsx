var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');

var ConfirmedPage = function() {
  return (
    <div class="confirmation">
      <p>You've been confirmed! As soon as we find a match, we'll let you know!</p>
    </div>
  )
}

var Container = connect(mapStateToProps)(ConfirmedPage);

module.exports = Container;
