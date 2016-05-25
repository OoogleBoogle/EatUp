var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    location: {
        city: String, //[latitude, longitude] has to be in this order if we wish to incorporate geospatial location
        state: String
    },
    food: String

});
var User = mongoose.model('User', userSchema);

module.exports = User;
