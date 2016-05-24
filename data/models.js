var mongoose = require('mongoose');
var userSchema = require('./schema').userSchema;

var User = mongoose.model('User', userSchema);
