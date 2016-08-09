const express = require('express');
const router = express.Router();
const path = require('path')
const userModelClass = require('../../../Models/authModels/userModel')
const userModel = new userModelClass


/* GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/build/index.html'))
})
router.route('/test')
    .get((req, res, next) => {
        userModel.getUser().then((resp) => {res.json(resp)})
    })

module.exports = router;
