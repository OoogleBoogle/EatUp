var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var venueSchema = require('./venue');
var userSchema = require('./user');

var mealSchema = new Schema({
    venue: { //should be venue ID
        type: String,
        ref: 'Venue'
    },
    users: [{ //should be user not users
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});
var Meal = mongoose.model('Meal', mealSchema);
var Venue = mongoose.model('Venue', venueSchema);
var User = mongoose.model('User', userSchema);

exports.Meal = Meal;
exports.User = User;
