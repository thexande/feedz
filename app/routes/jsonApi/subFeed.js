const express = require('express');
const router = express.Router();
const path = require('path')
const subFeedModelClass = require('../../Models/feedModels/subFeedModel')
const subFeed = new subFeedModelClass

router.route('/')
  .get((req, res, next) => {
    subFeed.getAllSubFeeds().then((allSubFeeds) => {
      console.log(allSubFeeds)
      res.json(allSubFeeds)
    })
    .post((req, res, next) => {
      subFeed.createSubFeed(req.body).then((resp) => {console.log(resp)})
    })
  })

module.exports = router
