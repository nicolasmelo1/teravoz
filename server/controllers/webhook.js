var express = require('express');
var router = express.Router();
var Call = require('../models/calls.js');
var User = require('../models/users.js');
var delegate = require('../services/delegate.js');
var config = require('../config.js').get(process.env.NODE_ENV);

/** POST webhook - Gets events sent from Teravoz
 * Saves the data on Mongo
 * Saves user if it's his first call while on standby
 * **/
router.post('/', function (req, res, next) {
    const event = req.body;
    const credentials = config.credentials.user + ':' + config.credentials.pass;

    Call.findOne({
        callId: req.body.call_id,
        type: req.body.type
    }).exec(function (error, result) {
        if (!result) {
            Call.create({
                type: req.body.type,
                callId: req.body.call_id,
                direction: ((req.body.direction) ? req.body.direction : null),
                code: ((req.body.code) ? parseInt(req.body.code) : 0),
                ourNumber: ((req.body.our_number) ? parseInt(req.body.our_number) : 0),
                theirNumber: ((req.body.their_number) ? parseInt(req.body.their_number) : 0),
                theirNumberType: ((req.body.their_number_type) ? req.body.their_number_type : null),
                actor: ((req.body.actor) ? req.body.actor : null),
                number: ((req.body.number) ? parseInt(req.body.number) : 0)
            }, function (err, result) {
                if (err) res.json({
                    error: err.errors.type.message
                });
            })
        }
    });

    if (event.type === 'call.standby' && req.body.their_number) {
        User.findOne({number: req.body.their_number}).exec(function (error, result) {
            if (result) {
                delegate(credentials, event.call_id, 901);
                res.json({
                    status: 'ok'
                })
            } else {
                User.create({
                    number: req.body.their_number,
                    function(err, result) {
                        if (err) {
                            res.json({
                                error: err.errors.type.message
                            });
                        }
                    }
                });
                delegate(credentials, event.call_id, 900);
                res.json({
                    status: 'ok'
                })
            }
        });
    } else {
        ((req.body.their_number) ? res.json({status:'ok'}) : res.json({error: '`their_number` is not defined'}))
    }
});


module.exports = router;
