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
var auth_controller = require('../../controllers/authController');

//POST request for user registration
router.post('/auth/token', auth_controller.user_register);

//GET request to verify user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;