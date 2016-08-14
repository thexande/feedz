'use strict'
const express = require('express');
const router = express.Router();
const path = require('path')
const postModelClass = require('../../Models/postModels/postModel')
const post = new postModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => {
    res.send('woot')
  })

module.exports = router
