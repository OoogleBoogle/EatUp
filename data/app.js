require('../db/connect');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var User = require('../model/user');

mongoose.connection.on('error', function(err) {
    console.error('COULD NOT CONNECT. Error:', err);
});


// MODELS

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

var createUser = function() { //give variable names to connie for creating user and finding user
    User.create(function() {

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


// END OF ADDTL FEATURES

//FIND USER BY FOOD AND location



/*app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.json({
        message: 'This is the main page!',
    });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});

exports.app = app;
*/
