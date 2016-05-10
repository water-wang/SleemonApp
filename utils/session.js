var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redisClient = require('./redisdb').redisClient;
var config = require('../config');

module.exports = session({
    ////TODO: there is a bug when using redisStore. 
    //store: new redisStore({ host: 'localhost', port: 6379, client: redisClient }),
    secret: config.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
});
