var React = require('react');
var ReactDOM = require('react-dom');

var EatUp = React.createClass({
  getRestaurant: function() {
    this.props.dispatch.actions.getRestaurant();
  },
  render: function() {
    //TODO: if the textboxes are all filled out, diabled = false
    return (
      <header>
        <h1>EatUp</h1>
        <p>Find dining companions near you!</p>
        <Form />
        <FormButton submitFunction={this.getRestaurant} text="Let's eat up!"/>
      </header>
    )
  }
})

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
        <select class="foodType">
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
      </form>
    );
  }
});

var FormButton = React.createClass({
  render: function() {
    var disabled = true;
    return (
      <button type="submit" onSubmit={this.props.submitFunction} disabled={this.props.disabled}>{this.props.text}</button>
    )
  }
});

var ConfirmButton = React.createClass({
  render: function() {
    return (
      <button type="submit" onSubmit={this.props.confirmFunction}>I would eat that</button>
    )
  }
});

var ConfirmationPage = React.createClass({
  render: function() {
    return (
      <section>
        <h3>Confirmation Page</h3>
        <div>Almost there! What do you think of this restaurant? Please hit confirm if you'd like to eat there!"</div>
        <div>
          <ConfirmButton />
        </div>
      </section>
    );
  }
});

var ConfirmedPage = function() {
  return (
    <div class="confirmation">
      <p>You've been confirmed! As soon as we find a match, we'll let you know!</p>
    </div>
  )
}

// window.onload = function() {
//   console.log('function called');
//   var startPos;
//   var geoOptions = {
//      timeout: 10 * 1000
//   }
//
//   var geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').value = startPos.coords.latitude;
//     document.getElementById('startLon').value = startPos.coords.longitude;
//   };
//   var geoError = function(error) {
//     console.log('Error occurred. Error code: ' + error.code);
//     // error.code can be:
//     //   0: unknown error
//     //   1: permission denied
//     //   2: position unavailable (error response from location provider)
//     //   3: timed out
//   };
//
//   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
// };

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<EatUp />, document.getElementById('app'));
});
