/**
 * components
 */
var utils = require('./utils');
var config = require('./config');
var routers = require('./router');
var wechat_routers = require('./wechat/router');
var middlewares = require('./middlewares');

/**
 * dependencies
 */
var path = require('path');
var express = require('express');
var compress = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
require('colors');

/**
 * variables
 */
var app = express();
var logger = utils.logger;

/**
 * view engine
 */
app.set('views', './assets/views');
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';

/**
 * middlewares
 */
app.use(express.static('assets'));

app.use(middlewares.httplog);
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json());
app.use(cookieParser(config.SECRET_SESSION));
app.use(compress());
app.use(utils.session);
app.use('/', routers);
app.use('/wechat', wechat_routers);
app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 Internal error.');
});

app.get('/', function (req, res) {
    res.render('layout.html');
});

/**
 * startup
 */
app.listen(config.PORT, function () {
    logger.info('Sleemon app is listening on port ' + config.PORT);
});