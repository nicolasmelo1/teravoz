var config = {
    default: {
        credentials: {
            user: 'user.nickname',
            pass: 'user.pass'
        },
        teravoz: {
            apiUrl: 'https://api.teravoz.com.br/',
        },
        database: 'mongodb://mongo:27017/teravoz',
      
    }
}
  
module.exports = {
    get: function (env){
        return config[env] || config.default;
    }
}