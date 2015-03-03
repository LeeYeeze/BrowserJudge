var router = require('express').Router();
var fs = require('fs')

function readJSONAsync (filepath,res,next) {
    fs.readFile (filepath, 'utf8',function (err, data) {
        console.log(filepath);
        if (err) {return next()}
        var testCase = {};
        testCase.content = data;
        //console.log(data);
        res.json(testCase);
    })


}

router.get('/:question', function (req,res,next) {
    var param = req.param('question');
    console.log(param);

    var testCase = {};
    testCase.content = "feel lucky";
    //res.json(testCase)
    var file = require('../../TestCases/'+param);
    testCase.content = file;
    res.json(testCase)

    //readJSONAsync(__dirname+'/../../TestCases/'+param+'.json',res,next);

})

router.post('/', function (req,res,next) {

})

module.exports = router;