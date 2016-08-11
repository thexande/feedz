'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')
const userModelClass = require('../../Models/authModels/userModel')
const userModel = new userModelClass
const passport = require('passport')

router.route('/')
    .get((req, res, next) => {
        userModel.getUser().then((resp) => {res.json(resp)})
    })
router.route('/login')
    .post(function(req, res, next) {

     passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!',
        user: user,
        info: info
      })
    })
  })(req, res, next)
    })
router.route('/register')
    .post((req, res, next) => {
        console.log(req.body)
        userModel.createUserIfNotExists(req.body).then((userResponse) => {res.json(userResponse)})

    })
module.exports = router
