require('../db/connect');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Meal = require('../model/meal').Meal;
var User = require('../model/meal').User;
mongoose.connect('mongodb://localhost/eatup-test');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connection.on('error', console.error.bind(console, 'CONNECTION ERROR MESSAGE:'));
mongoose.connection.once('open', function() {
    console.log('DB CONNECTION SUCCESSFUL');
});

console.log('THIS IS THE USER', User);
var testUser = new User({
    firstName: 'Stone Cold',
    lastName: 'Steve Austin',
    email: 'austin316@gmail.com',
    city: 'Austin',
    state: 'Texas',
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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        venue_id: req.body.venue_id
    });
    var meal = new Meal({
        user: user,
        venue_id: req.body.venue_id //store venue ID instead
    });
    user.save(function(err) {
        if (err) return handleError(err);
    });
    meal.save(function(err) {
        if (err) return handleError(err);
    });

});
//TODO: exclude repeat names upon querying city, foodType, and venueName

var queryMeals = function(venue_id, user) {
    Meal.findOne({
        venue_id: venue_id,
        user: user
    }, function(err, Meal) {
        if (err) {
            console.log("NO MATCHING DATES FOUND");
            Meal.save(function(err) {
                if (err) return handleError(err);
            });
            mongoose.disconnect();
            return;
        } else {
            //TODO: include transactional mail code here
            console.log("DATE FOUND!", Meal);
            mongoose.disconnect();
        }
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
