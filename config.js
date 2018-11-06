var config = {
    default: {
        credentials: {
            user: 'user.nickname',
            pass: 'user.pass'
        },
        teravoz: {
            apiUrl: 'https://api.teravoz.com.br/',
        },
        database: 'mongodb://localhost:27017/',
      
    }
}
  
exports.get = function get(env) {
return config[env] || config.default;
}