var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.engine('.html',require('ejs').__express)
app.use(bodyParser.json())
app.use(require('./auth'))
app.use('/api/posts', require('./controllers/api/posts'))
app.use('/api/sessions',require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use('/api/submissions',require('./controllers/api/submissions'))
app.use(require('./controllers/api/problem'))
app.use('/api/problems',require('./controllers/api/problems'))
app.use('/api/tests',require('./controllers/api/tests'))
app.use('/api/verify',require('./controllers/api/verify'))
app.use(require('./controllers/api/probs'))
app.use(require('./controllers/static'))


app.listen(3000, function () {
    console.log('Server listening on', 3000)
})




