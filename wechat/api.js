var wechat = require('wechat');
var config = require('../config');
var logger = require('../utils').logger;

module.exports.post = wechat(config.WECHAT, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  logger.info(message);
  if(message != undefined) {
    res.reply([
        {
            title: '快来试试登录功能吧',
            description: '总算搞清楚公众号怎么玩了，大家庆祝下！',
            picurl: 'http://imgsrc.baidu.com/forum/w%3D580/sign=3a975df0f2deb48ffb69a1d6c01e3aef/35d68f345982b2b717cffe5530adcbef77099b66.jpg',
            url: 'baidu.com'
        }
    ]);
  }
});

module.exports.get = function (req, res) {
    logger.info(req.query);
    // 签名成功
    if (wechat.checkSignature(req.query, config.WECHAT.token)) {
        res.status(200).send(req.query.echostr);
    } else {
        res.status(200).send('fail');
    }
};