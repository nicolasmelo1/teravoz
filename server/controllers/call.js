var express = require('express');
var router = express.Router();
var Call = require('../models/calls.js');

/** GET Calls - Get number of active and finished calls **/
router.get('/', function(req, res, next) {
    Call.aggregate().group({ _id: { callId: '$callId', types: '$type'}}).exec(
        function (error, result) {
            var finishedCalls = result.filter(query=> {
                return (query._id.types === 'call.finished');
            }).length;
            var activeCalls = result.filter(query=> {
                return (query._id.types !== 'call.finished');
            });
            var uniqueActiveCalls = [...new Set(activeCalls.map(item => item._id.callId))].length;

            res.json({
                activeCalls: uniqueActiveCalls,
                finishedCalls: finishedCalls
            });
        }
    );
});

module.exports = router;