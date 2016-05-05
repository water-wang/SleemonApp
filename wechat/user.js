var wechat = require('wechat-enterprise');
var urllib = require('urllib');
var config = require('../config');

var API = wechat.API;
var api = new API(config.WECHAT_CORP.corpId, config.WECHAT_CORP.corpSecret);

/**
 * get user wechat info 
 */
module.exports.getUser = function (req, res) {
    var userid = req.params.userid;
    
    api.getUser(userid, function (err, data, resp) {
        if (err) {
            res.end(err.message);
        }
        // need session here.
    });
};

/**
 * get user list from departments.
 * should consider how to sync with web api.
 */
module.exports.getDepartmentUsers = function (req, res) {
    var departmentId = req.params.departmentId;
    
    api.getDepartmentUsers(departmentId, 1, 0, function (err, data, resp) {
        if (err) {
            res.end(err.message);
        }
        
        var options = {
            data: data.userlist,
            method: 'POST',
            contentType: 'json',
            dataType: 'json'
        };
        // Post departments data to server web api.
        urllib.request(config.WEBAPI_URI + '/departmentUsers', options, function (err, data, resp) {
            if (err) {
                res.end(err);
            }
            res.end(resp.statusCode.toString());
        });
    });
};