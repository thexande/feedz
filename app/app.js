var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')
var spa = require('./routes/spa')
require('dotenv').config()
var app = express()
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))
app.use('/', spa)
app.use('/nm', express.static(__dirname + '/../node_modules/'))
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})
module.exports = app
