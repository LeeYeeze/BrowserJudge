var router = require('express').Router()
var Submission = require('../../models/submissions')

router.get('/api/submissions',function (req, res, next) {
    var username = req.param('username')
    Submission.find().exec(function (err, submissions) {
        if (err) {return next(err)}
        res.json(submissions)
    })

})

router.post('/api/submissions',function (req, res, next) {
    var newSubmission = new Submission({
        username: req.auth.username,
        body: res.body.code,
        date: Date.now(),
        status: res.body.status,
        submissionID: 1

    });
    newSubmission.save(function (err, submission) {
        if (err) {return next(err)}
        res.json(201)
    })
})

module.exports = router
