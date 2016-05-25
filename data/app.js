require('../db/connect');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var User = require('../model/user');

mongoose.connect('mongodb://localhost/eatup-test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR MESSAGE:'));
db.once('open', function() {
  console.log('DB CONNECTION SUCCESSFUL');
});
// var connection = mongoose.createConnection('mongodb://localhost/eatup-test');
//
// mongoose.connection.on('error', function(err) {
//     console.error('COULD NOT CONNECT. Error:', err);
// });


// MODELS
// MODELS HAVE BEEN EXPORTED TO MODEL DIRECTORY
// END MODELS


var testUser = new User({
    firstname: 'Stone Cold',
    lastname: 'Steve Austin',
    email: 'austin316@gmail.com',
    food: 'French', //talk with connie about expanding food taste selection
    location: {
        city: 'Austin',
        state: 'Texas'
    }
});

testUser.save(function(err) {
    if (err) {
        return 'USER DID NOT SAVE!';
    }
});

var createUser = function(firstname, lastname, email, food, city, state) { //give variable names to connie for creating user and finding user
    var user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        food: food, //talk with connie about expanding food taste selection
        location: {
            city: city,
            state: state
        }
    });

    user.save(function(err) {
        if (err) return handleError(err);
        // saved!
    });
};

var findUser = function(name) {
    User.findOne({
        name: name
    }, function(err, user) {
        if (err) {
            console.log("USER NOT FOUND", name);
            mongoose.disconnect();
            return;
        }
        console.log("USER FOUND!", name);
        mongoose.disconnect();
    });
};

User.find(function(err, user) {
    if (err) {
        errback(err);
        return;
    }
    console.log(user);
});

findUser('Stone Cold Steve Austin');
findUser('Kaeside');

//BEGIN ADDTL FEATURES


//SCHEMA FOR MESSAGES

//Locking People Out from meeting up with other people once they commit to a date for that day only

//FIND USER BY FOOD AND location

// END OF ADDTL FEATURES
