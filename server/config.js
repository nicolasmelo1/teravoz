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
      
    },
    test: {
        credentials: {
            user: 'user.nickname',
            pass: 'user.pass'
        },
        teravoz: {
            apiUrl: 'https://api.teravoz.com.br/',
        },
        database: 'mongodb://mongo:27017/testing',

    }
};
  
module.exports = {
    get: function (env){
        return config[env] || config.default;
    }
}