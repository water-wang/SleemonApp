var utils = require('../utils');
var config = require('../config');
var wechat = require('../wechat');

var client = utils.client;

module.exports.userinfo = function (req, res) {
    if (req.session && req.session.user) {
        return res.json({ code: 0, data: req.session.user });
    }
      
    if (!req.query.code) {
        var redirectUri = req.protocol + '://' + req.get('host') + req.originalUrl;
        var url = wechat.user.getAuthorizeURL('http://wq6zmhmcmz.proxy.qqbrowser.cc/user');
        res.redirect(url);
    } else {
        var user = {};
        // call wechat api to get user info.
        wechat.user.getUserByCode(req.query.code, function (err, data) {
            if (err) {
                return res.json({ code: 1, errmsg: err });
            }
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    user[prop] = data[prop];                    
                }
            }            
            if (user.userid) {
                // Call Webapi to get user info of Sleemon app.
                var options = { data: { userid: user.userid }};    
                client('/user', options, function (err, data) {
                    if (err) {
                        ////TODO: webapi call.
                        //return res.json({ code: 1, errmsg: err });
                    }
                    for (var prop in data) {
                        user[prop] = data[prop];                    
                    }
                                   
                    req.session.user = user;                    
                    res.json({ code: 0, data: user });
                });
            } else {
                return res.json({ code: 1, errmsg: 'userid is missing.' });
            }
        });
    }
};