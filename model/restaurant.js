var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    restaurantName: String
});

module.exports = restaurantSchema;
