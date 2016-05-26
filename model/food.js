var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    foodType: String,
    //restaurantName: String

});

module.exports = foodSchema;
