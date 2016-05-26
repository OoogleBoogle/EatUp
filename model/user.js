var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    venueName: {
        type: String,
        ref: 'Venue'
    },
    venueID: {
        type: String,
        ref: 'VenueID'
    }

});


module.exports = userSchema;
