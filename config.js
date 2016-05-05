config = {
    
    DEBUG : true,
    
    PORT : 3003,
    
    HOST : 'localhost',
    
    LOG_PATH : __dirname + '/log',
    
    SECRET_SESSION : 'soostep',
    
    WEBAPI_URI : 'http://localhost/5006',
    
    WECHAT: {
        // 公众号ID
        appID: "wx94911ed9aa3ef58c",
        // 公众号密钥
        appSecret: "c2f8def6c499b979bc46f7beee43091d",
        // 公众号预设Token    
        token: "wDp28oXxdrIIcMpROhc",
    },
    
    WECHAT_CORP : {
        token : 'wDp28oXxdrIIcMpROhc',
        
        encodingAESKey : 'd4ipr4Jh6G4s4rcldyLjfcOEmjd6mXhAkKhfT79HOcx',
        
        corpId : 'wx95163ad0c138c4ab',
        
        corpSecret : 'hYmhdtwH7vnsYxbRAD1yR7o0eON3RxOTLosSL1i2PdDJQeZgWEe4Cy7y33T59llJ'
    }
}

module.exports = config;