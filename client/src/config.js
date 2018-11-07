var config = {
    default: {
        serverHost: 'http://localhost:5000'
    }
};

module.exports = {
    get: function (env){
        return config[env] || config.default;
    }
}