var fs     = require('fs');
var moment = require('moment');
var log4js = require('log4js');
var config = require('../config');

var env = process.env.NODE_ENV || "DEV";

// create log directory.
fs.existsSync(config.LOG_PATH) || fs.mkdirSync(config.LOG_PATH);

/**
 * initialize logger for sleemon app.
 */
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: config.LOG_PATH + '/app-' + moment().format('YYYYMMDD') + '.log', category: 'sleemonapp' }
    ]
});

var logger = log4js.getLogger('sleemonapp');
logger.setLevel(config.DEBUG && env !== 'test' ? 'DEBUG' : 'ERROR');

module.exports = logger;

