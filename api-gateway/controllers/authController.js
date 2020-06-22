/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: authentication controller
;===========================================
*/

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

//new user registration using POST
exports.user_register = function(request, response) {
    //response.send('NOT IMPLEMENTED: User registration POST');
    
    var hashedPassword = bcrypt.hashSync(request.body.password, 8);

        var newUser = new User({
        username: request.body.username,
        password: hashedPassword,
        email: request.body.email
    });


    User.add(newUser, (err, user) => {
        if(err)
            return response.status(500).send('There was a problem registering the user.');
        
        var token = jwt.sign({ id: user._id }, config.web.secret, {
            expiresIn: 86400 //24 hours
        });

        response.status(200).send({ auth: true, token: token });
    });
};

//verify token on GET request
exports.user_token = function(request, response) {
    //response.send('NOT IMPLEMENTED: User token lookup GET');

   /* var token = request.headers['x-access-token'];

    if(!token)
        return response.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if(err) 
            return response.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    User.getById(decoded.id, function(err, user) {
        if(err)
            return response.status(500).send('There was a problem finding the user.');

        if(!user)
            return response.status(404).send('No user found.');

        response.status(200).send(user);

        });
    });*/

    User.getById(request.userId, function(err, user) {
        if(err)
            return response.status(500).send('There was a problem finding the user.');

        if(!user)
            return response.status(404).send('User not found');

        response.status(200).send(user);
    });
};

//handle user login requests
exports.user_login = function(request, response) {
    
    User.getOne(request.body.email, function(err, user) {
        if(err)
            return response.status(500).send('Server error');
        if(!user)
            return response.status(404).send('User not found');

        var passwordIsValid = bcrypt.compareSync(request.body.password, user.password);

        if(!passwordIsValid)
            return response.status(401).send( { auth: false, token: null } );
        
        var token = jwt.sign( { id: user._id}, config.web.secret, {
            expiresIn: 86400
        });

        response.status(200).send( {auth: true, token: token } );
    });
}

//handle user logout requests
exports.user_logout = function(request, response) {
    response.status(200).send( { auth: false, token: null } );
};