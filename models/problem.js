var db = require('../db')
var problem = db.Schema({
    name : {type: String, required: true},
    difficulty: {type: String, required: true},
    url:{type: String, required: true}
})
module.exports = db.model('Problem',problem)