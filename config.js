config = {
    
    DEBUG : true,
    
    PORT : 3003,
    
    HOST : 'localhost',
    
    LOG_PATH : __dirname + '/log',
    
    SECRET_SESSION : 'sleemonapp',
    
    WEBAPI_URI : 'http://localhost:5006',

    WECHAT_CORP : {
        
        token : 'wDp28oXxdrIIcMpROhc',
        
        encodingAESKey : 'd4ipr4Jh6G4s4rcldyLjfcOEmjd6mXhAkKhfT79HOcx',
        
        corpId : 'wxc5ae57f3724d87a8', 
        // 'wx95163ad0c138c4ab',
        
        corpSecret : 'Ll5AY-po9tHp3ZtIcrcCE6xxUfHlk0OAMKAU9GSh7HX4mR1dcSull5_pAeH5Pecz'
        //'hYmhdtwH7vnsYxbRAD1yR7o0eON3RxOTLosSL1i2PdDJQeZgWEe4Cy7y33T59llJ'
    }
}

module.exports = config;