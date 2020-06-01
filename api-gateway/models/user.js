/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: creates model and schema
;===========================================
*/

//fields: username, password, email
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});


//const User = module.exports.add = mongoose.model('User', userSchema)

const User = module.exports = mongoose.model('User', userSchema);

module.exports.add = (user, callback) => {
    user.save(callback);
}

module.exports.getById = (id, callback) => {
    var query = { _id: id };
    User.findById(query, callback);
}

