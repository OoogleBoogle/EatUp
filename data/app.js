var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bodyParser = require('body-parser');
var userSchema = require('./schema').userSchema;

mongoose.connect('mongodb://localhost/');

mongoose.connection.on('error', function(err) {
    console.error('COULD NOT CONNECT. Error:', err);
});


// MODELS
var User = mongoose.model('User', userSchema);
// END MODELS


var testUser = new User({
    name: 'Stone Cold Steve Austin',
    email: 'austin316@gmail.com',
    food: 'French',
    location: 'Austin, Texas'
});

testUser.save(function(err) {
    if (err) {
        return 'USER DID NOT SAVE!';
    }
});

var findaUser = function(name) {
    testUser.findOne({
        name: name
    }, function(err, testUser) {
        if (err || !testUser) {
            console.log("USER NOT FOUND", name);
            mongoose.disconnect();
            return;
        }
        console.log("USER FOUND!", testUser.name);
        mongoose.disconnect();
    });
};

//FIND USER BY FOOD AND location



/*app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.json({
        message: 'This is the main page!',
    });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});

exports.app = app;
*/
