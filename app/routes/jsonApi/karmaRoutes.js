'use strict'
const express = require('express');
const router = express.Router();
const path = require('path')
const postModelClass = require('../../Models/postModels/postModel')
const post = new postModelClass
const karmaModelClass = require('../../Models/postModels/karmaModel')
const Karma = new karmaModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => Karma.getAllKarma().then((karma) => res.json(karma)))

router.route('/:id')
  .get((req, res, next) => {

  })

router.route('/up/:id')
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {
    Karma.setKarma(req.body.post_id, req.body.user_id).then((karma) => res.json(karma))
  })

router.route('/down/:id')
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {

  })

module.exports = router
