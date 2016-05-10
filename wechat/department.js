var wechat = require('wechat-enterprise');
var urllib = require('urllib');
var config = require('../config');

var API = wechat.API;
var api = new API(config.WECHAT_CORP.corpId, config.WECHAT_CORP.corpSecret);

module.exports.getDepartments = function (req, res) {
    // Get departments from webchat-enterprise-api.
    api.getDepartments(function (err, data, resp) {
        if (err) {
            res.end(err);
        }
        var options = {
            data: data.department,
            method: 'POST',
            contentType: 'json',
            dataType: 'json'
        };
        // Post departments data to server web api.
        urllib.request(config.WEBAPI_URI + '/departments', options, function (err, data, resp) {
            if (err) {
                res.end(err.message.toString());
            }
            res.end(resp.statusCode.toString());
        });
    });
}