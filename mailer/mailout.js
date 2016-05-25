var secrets = require('./secrets');
var sendgrid = require('sendgrid')(secrets.API_KEY);

var confirmMail = function(to, firstName) {
  // var email = new sendgrid.Email();
  var mail = new sendgrid.Email();
  mail.to = to;
  mail.from = 'simattfield@gmail.com',
  mail.subject = 'Hi from EatUp',
  mail.html = "<h3>Hay " + firstName + "! Your request has been saved. We'll contact you again when we've found you a match.</h3>"
  mail.setFilters({
    'templates': {
      'settings': {
        'enable': 1,
        'template_id': '255117e8-8c65-46b8-8afe-c3c395a81d6d',
      }
    }
  })

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
