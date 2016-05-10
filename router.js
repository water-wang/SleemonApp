var express = require('express');
var ctrls = require('./controllers');
var user = ctrls.user;

var router = express.Router();

router.get('/user', user.userinfo);

module.exports = router;