
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/socail', function () {
    console.log('mongodb connected')

})


module.exports = mongoose