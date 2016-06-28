require('../db/connect');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Meal = require('../model/meal').Meal;
var User = require('../model/meal').User;
var mailer = require('../mailer/mailout');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('public'));

mongoose.connection.on('error', console.error.bind(console, 'CONNECTION ERROR MESSAGE:'));
mongoose.connection.once('open', function() {
    console.log('DB CONNECTION SUCCESSFUL');
});

app.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

// TODO: retrieve object from Redux

app.post('/saveuser', function(req, res) {
    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        venue_id: req.body.venue_id,
        restaurantName: req.body.restaurantName,
        city: req.body.city,
        state: req.body.state
            // matched?
    });

    User.findOne({
        venue_id: req.body.venue_id
    }, function(err, user) {
        //res.json(user);
        if (user) {
            // log new user and the matching user (names)
            console.log(user.firstName);
            // update new and matching user paired to true
            newUser.paired = true;
            user.paired = true;
            user.save();
            if (newUser.paired === true && user.paired === true) {
                mailer.pairedMail(user.email, user.firstName, newUser.firstName, newUser.restaurantName);
                mailer.pairedMail(newUser.email, newUser.firstName, user.firstName, newUser.restaurantName);
            }
            console.log('found a match!');
        } else {
            mailer.confirmMail(newUser.email, newUser.firstName);
            console.log('Email has been sent');
        }
    });

    newUser.save(function(err) {
        if (err) return handleError(err);
        res.json({
            message: 'saved!'
        });
    });
});

//TODO: exclude repeat names upon querying city, foodType, and venueName

app.listen(3000, function() {
    console.log('Running on port 3000');
});

// queryUsers.exec(function(err, user) {
//     if (err) throw err;
//     res.send({
//         user: user
//     });
// });
