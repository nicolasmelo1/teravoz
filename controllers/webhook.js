var express = require('express');
var router = express.Router();
var Call = require('../models/calls.js');
var User = require('../models/users.js');
var delegate = require('../services/delegate.js');
var config = require('../config.js').get();

/* POST webhook */
router.post('/', function(req, res, next) {
  const event = req.body;
  const credentials = config.credentials.user + ':' + config.credentials.pass

  //console.info('[POST] Recieved Event:', event);

  // Check if CallId exists,
    // if exists but another type, set active to false
  Call.findOne({
          callId: req.body.call_id,
          type: req.body.type
      }).exec(function (error, result) {
      if (!result) {
          Call.create({
              type: req.body.type,
              callId: req.body.call_id,
              direction: req.body.direction,
              code: parseInt(req.body.code),
              ourNumber: parseInt(req.body.our_number),
              theirNumber: parseInt(req.body.their_number),
              theirNumberType: req.body.their_number_type
          }, function (err, result) {
              if (err) return handleError(err);
              //saved
          });
      }

  });

  if(event.type === 'call.standby'){
    User.findOne({ number: req.body.their_number }).exec(function(error, result){
      if(result){
          delegate(credentials, event.call_id, 901);
      } else {
        User.create({
          number: req.body.their_number,
          function (err, result) {
              if (err) return handleError(err);
          }
        });
        delegate(credentials, event.call_id, 900)
      }
    });
  }
  res.json({
      status: 'ok'
  });
});


module.exports = router;