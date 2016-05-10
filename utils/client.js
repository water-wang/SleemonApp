var urllib = require('urllib');
var logger = require('./logger');
var config = require('../config');

module.exports = function (endpoint, options, callback) {
    if (!endpoint) {
        return callback('WebAPI call error - endpoint is missing.', null);
    }  

    var url = config.WEBAPI_URI + endpoint;
    urllib.request(url, options, function (err, data, res) {
        if (err) {
            logger.error('WebAPI call error - name<' + err.name + '>, statusCode<' + res.statusCode + '>, message<' + err.message + '>.');
            return callback('WebAPI call error - ' + err.name, null);
        }
        if (data.errcode) {
            
        }
        return callback(null, data);
    });
}

