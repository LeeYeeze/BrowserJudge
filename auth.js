/**
 * Created with JetBrains WebStorm.
 * User: yizeli
 * Date: 11/9/14
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
var config = require('./config')
var jwt = require('jwt-simple')

module.exports = function (req, res, next) {
    if (req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret)

    }
    next()

}
