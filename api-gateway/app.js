/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   2 May 2020
; Modified by: Jeff Lintel
; Description: API gateway application
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//mongoose db connection
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')

var indexRouter = require('./routes/index');

//api-catalog routes
var apiCatalog = require('./routes/api-catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('api', apiCatalog);

//mongoose db connection
mongoose.connect('mongodb://admin:admin@ds121588.mlab.com:21588/mean-library', {
promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
