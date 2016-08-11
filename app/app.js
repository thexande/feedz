const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const spa = require('./routes/spa')
const jsonAPI = require('./routes/routeExport')
const userRoute = require('./routes/jsonApi/user')
const passport = require('passport')
const session = require('express-session')
require('dotenv').config()
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))
for(let route in jsonAPI){
  if(jsonAPI.hasOwnProperty(route)){
    let routeString = '/' +   route.toString()
    app.use('/users', jsonAPI[route])
  }
}
app.use('/', spa)
app.use('/nm', express.static(__dirname + '/../node_modules/'))
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'secret'
}));
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})
module.exports = app
