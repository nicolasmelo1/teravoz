var request = require('request');
var config = require('../config.js').get();


module.exports = function delegate(credentials, callId, destinationNumber){

    const url = config.teravoz.apiUrl + 'actions';
    const formattedCredentials = Buffer.from(credentials).toString('base64');
    const payload ={
            type: 'delegate',
            call_id: callId,
            destination: destinationNumber
    };

    request.post({
        url: url,
        headers: {
            'Authorization': `Basic ${formattedCredentials}`
        },
        body: payload,
        json: true
    }, function(err, res, body){
        if (err) {
            console.error('[Error] could not POST json: ', err);
            throw err
        }
        else {
            (body !== 'Unauthorized') ? console.info('[Sent] payload: ', payload) : console.info('[Error] Invalid Credentials: ', credentials);
        }
    })
}