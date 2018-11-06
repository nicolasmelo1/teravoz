var request = require('request')
var config = require('./config')

module.exports = function delegate(CREDENTIALS, callId){
    url = config.teravoz.apiUrl + 'actions'
    const credentials = Buffer.from(CREDENTIALS).toString('base64');
    const payload ={
            type: "delegate",
            call_id: callId,
            destination: "900"
    }
    request.post({
        url: url,
        headers: {
            'Authorization': `Basic ${credentials}`
        },
        body: payload,
        json: true
    }, function(err, res, body){
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }
    })
}