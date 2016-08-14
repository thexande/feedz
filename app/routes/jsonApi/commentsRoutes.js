'use strict'
const express = require('express');
const router = express.Router();
const path = require('path')
const postModelClass = require('../../Models/postModels/postModel')
const post = new postModelClass
const commentModelClass = require('../../Models/commentModels/commentModel')
const Comment = new commentModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => {
    res.send('woot')
  })
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {
    Comment.createComment(req.body.comment).then((commentRes) => res.json(commentRes))
  })
module.exports = router
