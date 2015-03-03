var express = require('express')
var router = express.Router()

router.use(express.static(__dirname+'/../assets'))
router.use(express.static(__dirname+'/../templates'))
router.get('/', function (req,res) {
    res.sendfile('layouts/app.html');
})

router.get('/test',function(req,res) {
    res.sendfile('layouts/nginc.html')

})

router.get('/ng-animate', function (req,res) {
    res.sendfile('layouts/abc dfg.html')
})



module.exports = router
