'use strict'
const async = require('async')
const express = require('express');
const router = express.Router();
const path = require('path')
const subFeedModelClass = require('../../Models/feedModels/subFeedModel')
const subFeed = new subFeedModelClass
const postModelClass = require('../../Models/postModels/postModel')
const posts = new postModelClass
const passport = require('passport')



router.route('/:id')
  .get((req, res, next) => {
  posts.getPostsBySubFeedId(req.params.id).then((posts) => res.json(posts))  
})

router.route('/')
  .get((req, res, next) => {
    subFeed.getAllSubFeeds().then((allSubFeeds) => { res.json(allSubFeeds.rows) })
  })
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {
    console.log(req.body)
      let subfeed = req.body.subfeedData
      subfeed.feedz_user_id = req.body.user.id
      subFeed.createSubFeed(subfeed).then((resp) => { res.json(resp) })
  })
router.route('/:id/comments')
  .get((req, res, next) => {
   subFeed.getAllCommentsAndFeeds(req.params.id)
    .then((commentsAndFeeds) => res.json(commentsAndFeeds))   
  })


module.exports = router
