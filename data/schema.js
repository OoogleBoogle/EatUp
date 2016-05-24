var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/geospatial_db', function(err) {
    if (err) throw err;

});

var UserSchema = new Schema({
    name: String,
    email: String,
    loc: String,
    date: {
        type: Date,
        default: Date.now
    },
});

exports.UserSchema = UserSchema;
