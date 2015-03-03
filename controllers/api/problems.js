var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')
var problemList = require('../../problemsList')
var fs = require('fs')

router.get('/',function(req,res,next) {
    res.json(problemList);

})

router.post('/',function(req,res,next) {

})

module.exports = router