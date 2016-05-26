var secrets = require('./secrets');
var sendgrid = require('sendgrid')(secrets.API_KEY);

var confirmMail = function(to, firstName) {
  // var email = new sendgrid.Email();
  var mail = new sendgrid.Email();
  mail.to = to;
  mail.from = 'simattfield@gmail.com',
  mail.subject = 'Hi from EatUp',
  mail.text = "Hay " + firstName + "! Your request has been saved. We'll contact you again when we've found you a match.",
  mail.html = "<h3>Hay " + firstName + "! Your request has been saved. We'll contact you again when we've found you a match.</h3>",
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
  var mail = new sendgrid.Email();
  mail.to = to;
  mail.from = 'simattfield@gmail.com',
  mail.subject = 'Hi from EatUp',
  mail.text = "Hay " + user + "! Tonight you'll be heading out to " + place + " with " + pair + "!",
  mail.html = "<h3>Hay " + user + "! Tonight you'll be heading out to " + place + " with " + pair + "!</h3>",
  mail.setFilters({
    'templates': {
      'settings': {
        'enable': 1,
        'template_id': 'e840b823-748d-4473-8e6b-89f90ac35bc5',
      }
    }
  })

  sendgrid.send(mail, function(err, json) {
    if (err) { console.error(err); }
    console.log(json);
  });
}

exports.confirmMail = confirmMail;
exports.pairedMail = pairedMail;
