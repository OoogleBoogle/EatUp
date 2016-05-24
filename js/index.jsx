var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
  preventRefresh: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <form onSubmit={this.preventRefresh} class="restaurantSearch">
        <div>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter your email..."></input>
        </div>
        <div>
          <input type="text" id="startLat" hidden="true"></input>
          <input type="text" id="startLon" hidden="true"></input>
        </div>
        <div>What do you want to eat today?</div>
        <select>
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
          <option value="mexican">Mexican</option>
          <option value="thai">Thai</option>
          <option value="japanese">Japanese</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="ethiopian">Ethiopian</option>
        </select>
        <div>
          <button type="submit">"Let/'s eat up!"</button>
        </div>
      </form>
    );
  }
});

var ConfirmationPage = React.createClass({
  render: function() {
    return (
      <section>
        <h3>Confirmation Page</h3>
        <div>Almost there! What do you think of this restaurant? Please hit confirm if you'd like to eat there!"</div>
        <div>
          <button type="submit">I'd eat that!</button>
        </div>
      </section>
    );
  }
});

window.onload = function() {
  console.log('function called');
  var startPos;
  var geoOptions = {
     timeout: 10 * 1000
  }

  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').value = startPos.coords.latitude;
    document.getElementById('startLon').value = startPos.coords.longitude;
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
};

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<Form />, document.getElementById('app'));
});
