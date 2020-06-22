/*
============================================
; Title:  check-token.js
; Author: Professor Krasso
; Date:   19 June 2020
; Modified by: Jeff Lintel
; Description: checks token against config.web's key
;===========================================
*/

var jwt = require('jsonwebtoken');
var config = require('./config');

function checkToken(request, response, next) {
    var token = request.headers['x-access-token'];

    if(!token)
        return response.status(403).send({auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if(err)
            return response.status(500).send({auth: false, message: 'Failed to authenticate token'});

    request.userId = decoded.id;
    next();
    });
}

module.exports = checkToken;