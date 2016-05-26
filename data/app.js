require('../db/connect');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var Meal = require('../model/meal').Meal;
var User = require('../model/meal').User;
var Food = require('../model/meal').Food;
//mongoose.connect('mongodb://localhost/eatup-test');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

console.log('THIS IS THE USER', User);
var testUser = new User({
    firstName: 'Stone Cold',
    lastName: 'Steve Austin',
    email: 'austin316@gmail.com',
    // foodType: 'French', //talk with connie about expanding food taste selection
    city: 'Austin',
    state: 'Texas',
    // restaurantName: 'McDonalds'
});

testUser.save(function(err) {
    if (err) {
        return 'USER DID NOT SAVE!';
    }
});

// TODO: retrieve object from Redux

app.post('/saveuser', function(req, res) {
    console.log('CODE HAS REACHED THIS POINT');
    var user = new User({
        //TODO: LET SIMON KNOW THAT WE ARE SAVING RESTAURANT NAME
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        foodType: req.body.foodType, //talk with connie about expanding food taste selection
        city: req.body.city,
        state: req.body.state,
        restaurantName: req.body.restaurantName
    });
    user.save(function(err) {
        if (err) return handleError(err);
        Food.find({
            foodType: req.body.foodType
        }, function(err, food) {
            console.log(food);
        });
        // Should save it error is not returned
        //TODO: find out how to store save user to collection
    });

});
//TODO: exclude repeat names upon querying city, foodType, and restaurantName

var queryUsers = function(city) {
    User.find({
        city: city
            // foodType: foodType,
            // restaurantName: restaurantName,
            //id: id
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
//TODO: discover how to compare users

app.listen(8080, function() {
    console.log('Running on port 8080');
});

// queryUsers.exec(function(err, user) {
//     if (err) throw err;
//     res.send({
//         user: user
//     });
// });

//queryUser('Stone Cold Steve Austin');
//findUser('Kaeside');

//BEGIN ADDTL FEATURES


//SCHEMA FOR MESSAGES

//Locking People Out from meeting up with other people once they commit to a date for that day only

//FIND USER BY FOOD AND location

// END OF ADDTL FEATURES
