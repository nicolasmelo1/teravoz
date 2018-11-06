var request = require('request');
var config = require('../config.js').get();


module.exports = function delegate(credentials, callId, destinationNumber){

    url = config.teravoz.apiUrl + 'actions'
    const formattedCredentials = Buffer.from(credentials).toString('base64');
    const payload ={
            type: "delegate",
            call_id: callId,
            destination: destinationNumber
    }

    request.post({
        url: url,
        headers: {
            'Authorization': `Basic ${formattedCredentials}`
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