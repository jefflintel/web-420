/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   2 May 2020
; Modified by: Jeff Lintel
; Description: configuration settings
;===========================================
*/

var config = {};
config.web ={};
config.web.port = process.env.PORT || "3000";

module.exports = config;