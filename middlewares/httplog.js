var logger = require('../utils').logger;

module.exports = function (req, res, next) {
    
    var t = new Date();
    logger.info('\n\nStarted', t.toISOString(), req.method, req.url, req.ip);
    
    res.on('finish', function () {
        var duration = ((new Date()) - t);
        
        logger.info('Completed', res.statusCode, ('(' + duration + 'ms)').green);
    });
    
    next();
};