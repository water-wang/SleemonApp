var qs = require('querystring');
var request = require('request');
var config = require('../config');
var logger = require('./logger');

function httpClient(endpoint, method, data, callback) {   
    var headers, jsonData, qsData = {};
    if (method === 'GET') {
        qsData = qs.stringify(data);
    } else {
        jsonData = JSON.stringify(data);
        headers = {
            'Content-Type' : 'application/json',
            'Content-Length' : jsonData.length
        };       
    }
    
    var options = {
        uri : config.WEBAPI_URI + endpoint,
        method : method,
        qs : qsData,        
        headers : headers,
        body : jsonData
    }
    
    request(options, function (err, res, body) {
        if (err) {
            logger.error('Call webapi error: ' + err + ' options: ' + options);
            
            return false;
        }
        logger.error('Call webapi sucessful, with options: ' + options);
        
        callback(res, JSON.parse(body));
    });
}

module.exports = httpClient;