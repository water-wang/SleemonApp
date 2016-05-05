var urllib = require('urllib');
var config = require('../config');

module.exports.info = function (req, res) {
    var wechatid = req.params.wechatid;
    
    // Call Webapi to get user info of Sleemon app.
    var options = {
        method: 'GET',
        data: {
            wechatid: wechatid
        }
    };
    
    urllib.request(config.WEBAPI_URI + '/user', options, function (err, data, resp) {
        if (err) {
            res.end(err);
        }
        res.end('success');
    });
    
    res.end('success :' + wechatid);
}