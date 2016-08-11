const express = require('express');
const router = express.Router();
const path = require('path')
const userModelClass = require('../../Models/feedModels/subFeedModel')
const subFeed = new subFeedModel

subFeed.getAllSubFeeds().then((allSubFeeds) => {
  console.log(allSubFeeds)
})