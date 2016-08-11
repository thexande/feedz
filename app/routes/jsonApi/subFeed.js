const express = require('express');
const router = express.Router();
const path = require('path')
const subFeedModelClass = require('../../Models/feedModels/subFeedModel')
const subFeed = new subFeedModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => {
    subFeed.getAllSubFeeds().then((allSubFeeds) => {
      res.json(allSubFeeds)
    })
  })
  .post((req, res, next) => {
    console.log(req.body)
    next()
  },
    passport.authenticate('bearer', {session: false}), (req, res, next) => {
      console.log(req.user)
    // subFeed.createSubFeed(req.body).then((resp) => {console.log(resp)})
    res.json(req.body)
  })


module.exports = router
