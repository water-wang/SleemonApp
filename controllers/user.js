var utils = require('../utils');
var httpClient = utils.client;

module.exports.info = function (req, res) {
    var wechatid = req.params.wechatid;
    
    // Call Webapi
    httpClient('/user', 'GET', wechatid, function (response, data) {
        if (response.status == 200) {
            res.end('sucess');
        }        
    });
}