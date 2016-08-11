'use strict'
const express = require('express');
const router = express.Router();
const path = require('path')
const subFeedModelClass = require('../../Models/feedModels/subFeedModel')
const subFeed = new subFeedModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => {
    subFeed.getAllSubFeeds().then((allSubFeeds) => { res.json(allSubFeeds.rows) })
  })
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {
      let subfeed = req.body.subfeedData
      subfeed.created_by_user = req.body.user.id
      subFeed.createSubFeed(subfeed).then((resp) => { res.json(resp) })
  })

module.exports = router
