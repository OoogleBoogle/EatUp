var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restaurantSchema = require('./restaurant');
var foodSchema = require('./food');
var userSchema = require('./user');

var mealSchema = new Schema({
    food: {
        type: String,
        ref: 'Food'
    },
    restaurant: {
        type: String,
        ref: 'Restaurant'
    },
    date: {
        type: Date
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});
var Meal = mongoose.model('Meal', mealSchema);
var Food = mongoose.model('Food', foodSchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);
var User = mongoose.model('User', userSchema);

exports.Meal = Meal;
exports.User = User;
exports.Food = Food;
