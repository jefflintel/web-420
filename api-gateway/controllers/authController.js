/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: authentication controller
;===========================================
*/

var User = require('../api-gateway/models/user');

//new user registration using POST
exports.user_register = function(request, response) {
    response.send('NOT IMPLEMENTED: User registration POST');
};

//verify token on GET request
exports.user_token = function(request, response) {
    response.send('NOT IMPLEMENTED: User token lookup GET');
};