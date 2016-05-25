var config = require('../config');
var mongoose = require('mongoose');
var db = mongoose.connection;

process.env.NODE_ENV = 'test';


beforeEach(function (done) {


  function emptyDatabase() {
    for (var i in db.collections) {
      db.collections[i].remove(function() {});
    }
    return done();
  }


  if (db.readyState === 0) {
    mongoose.connect(config.db.test, function (err) {
      if (err) {
        throw err;
      }
      return emptydatabase();
    });
  } else {
    return emptydatabase();
  }
});


afterEach(function (done) {
  mongoose.disconnect();
  return done();
});
