var secrets = require('./secrets');
var sendgrid = require('sendgrid')(secrets.API_KEY);

var confirmMail = function(to, firstName) {
  // var email = new sendgrid.Email();
  var mail = {
    to: to,
    from: 'simattfield@gmail.com',
    subject: 'Hi from EatUp',
    text: "Hay " + firstName + "! Your request has been saved. We'll contact you again when we've found you a match."
  };

  sendgrid.send(mail, function(err, json) {
    if (err) { console.error(err); }
    console.log(json);
  });
}

var pairedMail = function(to, user, pair, place) {
  var mail = {
    to: to,
    from: 'simattfield@gmail.com',
    subject: "You've been paired by EatUp",
    text: "Get ready " + user + "! You've been paired up with " + pair + " and you're going to " + place + "."
  };

  sendgrid.send(mail, function(err, json) {
    if (err) { console.error(err); }
    console.log(json);
  });
}

exports.confirmMail = confirmMail;
exports.pairedMail = pairedMail;
