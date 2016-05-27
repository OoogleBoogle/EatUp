var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String,
    state: String,
    venue_id: String,
    restaurantName: String,
    paired: {type: Boolean, default: false}
    // restaurantName: {
    //     type: String,
    //     ref: 'Venue'
    // },
    // venueID: {
    //     type: String,
    //     ref: 'VenueID'
    // }

});


module.exports = userSchema;
