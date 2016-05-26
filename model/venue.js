var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema({
    venueName: String //SHOULD BE ID
});

module.exports = venueSchema;
