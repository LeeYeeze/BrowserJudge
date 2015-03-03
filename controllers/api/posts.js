var Post = require('../../models/post')
var router = require('express').Router()

router.get('/', function (req,res,next) {
    Post.find().sort('-date').exec(function (err, posts) {
        if (err) {return next(err)}
        res.json(posts)
    })
})



router.post('/', function (req, res, next) {
    console.log("posting")
    var post = new Post({
        username: req.auth.username,
        body: req.body.body,
        date: Date.now()
    })

    post.save(function (err, post) {
        if (err) { return next(err)}
        res.json(post)
    })
})

module.exports = router



