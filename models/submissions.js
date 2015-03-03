var db = require('../db')

var Submission = db.model('Submission', {
    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, required: true},
    status: {type: String, required: true},
    submissionID : {type: Number, required: true}

})

module.exports = Submission