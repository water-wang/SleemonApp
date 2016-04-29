var express = require('express');
var ctrls = require('./controllers');
var user = ctrls.user;

var router = express.Router();

router.get('/user/:wechatid', user.info);

module.exports = router;