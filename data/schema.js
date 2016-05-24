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
    food: String
    //date: Date.now
    //{
    //    type: Date,
    //    default: Date.now
    //},
});

exports.userSchema = userSchema;

/*location": {
"address": "871 Sutter St",
"lat": 37.78836869881094,
"lng": -122.4145862541547,
"distance": 152,
"postalCode": "94109",
"cc": "US",
"city": "San Francisco",
"state": "CA",
"country": "United States",
"formattedAddress": [
"871 Sutter St",
"San Francisco, CA 94109",
"United States"
]
},*/
