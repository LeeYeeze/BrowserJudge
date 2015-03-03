var router = require('express').Router()
var Submission = require('../../models/submissions')

/*
router.post('/', function (req,res,next) {

})
*/

router.post('/api/submission', function (req,res,next) {

    var newSubmission = new Submission({
        username: req.auth.username,
        body: res.body.code,
        date: Date.now(),
        status: res.body.status,
        submissionID: 1

    });
    newSubmission.save(function (err, submission) {
        if (err) {res.json(503);next(err)}
        res.json(201)
    })
})

router.get('/api/submission/:submissionID', function (req,res,next) {
    var ID = req.param('submissionID')
    Submission.findOne ({submissionID: ID}, function (err, submission) {
        if (err) {return next(err)}
        if (submission) {
            if (submission.username!== req.auth.username) {
                res.send(403)

            }
            else {
                  res.json(submission)
            }
        }
        else {
            res.json(undefined)
        }



    })
})

module.exports = router


