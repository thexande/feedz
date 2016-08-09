var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')
var routes = require('./app/routes/user/index')
var users = require('./app/routes/user/users')
require('dotenv').config()
var app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'app/public')))
app.use('/', routes)
app.use('/users', users)
app.use('/nm', express.static(__dirname + '/node_modules/'))
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})
module.exports = app
