/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: api route setup
;===========================================
*/

//API routes
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token');

//POST request for user registration
router.post('/auth/register', auth_controller.user_register);

//GET request to verify user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

//POST request for logins
router.post('/auth/login', auth_controller.user_login);

//GET request for logouts
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;