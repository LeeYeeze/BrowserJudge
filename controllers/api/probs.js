var problemSet3 = require("../../prettyProblems.json");

var router = require('express').Router()

router.get('/api/probs/:problem',function(req,res,next) {

    //console.log('find it')
    //console.log(req.param('problem'))
    var param = req.param()
    //console.log(ProblemSet)
    var index =problemSet3['/problems/'+req.param('problem').toLowerCase()+'/'].indexOf('<div id="tags" class="btn btn-xs btn-warning">')
    var render =problemSet3['/problems/'+req.param('problem').toLowerCase()+'/'].slice(0,index);
    var description= render//render.replace(/\n/g,"").replace(/\r/g,"")
    var toRend = {}
    toRend.dis = description
    console.log(description)
    res.json(toRend)

})

module.exports = router