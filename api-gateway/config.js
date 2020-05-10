/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   9 May 2020
; Modified by: Jeff Lintel
; Description: configuration settings
;===========================================
*/

var config = {};
config.web ={};
config.web.port = process.env.PORT || "3000";

config.web.secret = 'topsecret';

module.exports = config;