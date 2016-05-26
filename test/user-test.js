// var utils = require('./utils');
// var chai = require('chai');
// var should = require('should');
// // import our User mongoose model
// var User = require('./model/user').User;
// var saveUser = require('../redux/actions').saveUser;
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();


describe('Test Post', function() {
    it('should save an object to the database on POST', function(done) {
       chai.post('/saveuser')
           .send(req.body)
           .end(function(err, res) {
    it("should save object to database", function(){
        req.body.should.be.a('object');
    });
});
