var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/geospatial_db', function(err) {
    if (err) throw err;

});

var userSchema = new Schema({
    name: String,
    email: String,
    location: String,
    food: String,
    date: {
        type: Date,
        default: Date.now
    },
});

exports.userSchema = userSchema;
