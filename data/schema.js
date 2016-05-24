var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/geospatial_db', function(err) {
    if (err) throw err;

});

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    city: String, //[latitude, longitude]
    state: String,
    food: String,
    date: Date.now
    //{
    //    type: Date,
    //    default: Date.now
    //},
});

exports.userSchema = userSchema;
