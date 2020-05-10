/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: creates model and schema
;===========================================
*/

//fields: username, password, emajl
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);