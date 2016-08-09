const express = require('express');
const router = express.Router();
const path = require('path')
const userModelClass = require('../../Models/authModels/userModel')
const userModel = new userModelClass



router.route('/')
    .get((req, res, next) => {
        userModel.getUser().then((resp) => {res.json(resp)})
    })

module.exports = router;
