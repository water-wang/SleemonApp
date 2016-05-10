var wechat = require('wechat-enterprise');
var urllib = require('urllib');
var utils = require('../utils');
var config = require('../config');

var API = wechat.API;
var api = new API(config.WECHAT_CORP.corpId, config.WECHAT_CORP.corpSecret);
var logger = utils.logger;

/**
 * get authorize url to retrieve code.
 */
module.exports.getAuthorizeURL = function (redirect) {
    var url = api.getAuthorizeURL(redirect);    
    return url;
}

/**
 * get user info by code
 */
module.exports.getUserByCode = function (code, callback) {
    api.getUserIdByCode(code, function (err, data, resp) {
        if (err) {
            logger.error('WechatAPI call error - name<' + err.name + '>, message<' + err.message + '>.');
            return callback(err.message, null);
        }
        return getUserById(data.UserId, callback);
    });
};

/**
 * get user info by userid
 */
function getUserById(userid, callback) {
    if (!userid) {
        return callback('Validation error - Param <userid> is required.', null);
    }
    
    api.getUser(userid, function (err, data, resp) {
        if (err) {
            logger.error('WechatAPI call error - name<' + err.name + '>, message<' + err.message + '>.');
            return callback(err.message, null);
        }
        return callback(null, data);
    });
};

module.exports.getUserById = getUserById;

/**
 * get user list from departments.
 * should consider how to sync with web api.
 */
module.exports.getDepartmentUsers = function (req, res) {
    var departmentId = req.params.departmentId;
    
    api.getDepartmentUsers(departmentId, 1, 0, function (err, data, resp) {
        if (err) {
            res.end(err.message.toString());
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