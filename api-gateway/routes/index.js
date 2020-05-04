/*
============================================
; Title:  index.js
; Author: Jeff Lintel
; Date:   2 May 2020
; Description: creates route for index
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  author: 'Jeff Lintel',
  course: 'WEB 420'});
});

module.exports = router;
