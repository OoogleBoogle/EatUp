var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    foodType: {
        type: String,
        ref: 'Food'
    },
    city: String,
    state: String,
    restaurantName: {
        type: String,
        ref: 'Restaurant'
    }

});


module.exports = userSchema;
